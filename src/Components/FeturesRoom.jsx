import FeturesRoomCard from "./FeturesRoomCard";


const FeturesRoom = () => {
    return (
        <section>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Fetures</span></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                  <FeturesRoomCard/>
                  <FeturesRoomCard/>
                  <FeturesRoomCard/>
                </div>
            </div>
        </section>
    );
};

export default FeturesRoom;