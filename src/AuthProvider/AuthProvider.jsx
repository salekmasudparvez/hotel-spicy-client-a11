import {  signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import axios from 'axios';
import { PropTypes } from 'prop-types';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const[loading, setLoading]=useState(true)

    const providerGoogle = new GoogleAuthProvider();
    const creatUserGoogle =()=>{
        setLoading(true)
       return signInWithPopup(auth,providerGoogle).then(result=>{
        console.log(result);
        const loggedUser = {email:result.user?.email}
        if(result){
            axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data);
                    })
         }
    })
    }
    const creatUserPassword = ( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const signInWithPassword =( email, password)=>{
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }
    
  
    const LogOutUser = ()=>{

        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setLoading(false)
           if(!currentUser){
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
           
        })
        return ()=> unsubscribe()
    },[user?.email]);
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    const GetAllData ={
        creatUserGoogle,user,LogOutUser,creatUserPassword,signInWithPassword,loading,setLoading,updateUserProfile,setUser
    }
    return (
        <AuthContext.Provider value={GetAllData}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.element
}

export default AuthProvider;