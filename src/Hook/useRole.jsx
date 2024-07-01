
import axios from 'axios'
import useAuth from './useAuth'
import { useQuery } from '@tanstack/react-query'
const useRole = () => {
  const { user, loading } = useAuth()

  const { data: role = '', isLoading } = useQuery({
    queryKey: ['role', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axios.get(`https://hotel-server-kappa.vercel.app/role/${user?.email}`)
      const data = res?.data.role
      return data
    },
  })

  //   Fetch user info using logged in user email

  return [role, isLoading]
}

export default useRole