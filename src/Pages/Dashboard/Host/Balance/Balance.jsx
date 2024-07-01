import { GoHome } from "react-icons/go";
import { HiUserGroup } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";

const Balance = () => {
    return (
        <div className=" w-full space-y-4 p-3 h-screen py-10 overflow-y-auto">
            <div className="lg:stats flex flex-col-reverse rounded-xl  shadow w-full">
                <div className="stat">
                    <div className="stat-figure text-sky-500 text-3xl">
                        <GoHome />
                    </div>
                    <div className="stat-title">Rooms</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc"></div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-sky-500 text-3xl">

                        <HiUserGroup />
                    </div>
                    <div className="stat-title">All Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-sky-500 text-3xl">

                        <GiReceiveMoney />

                    </div>
                    <div className="stat-title">Balance</div>
                    <div className="stat-value text-red-500">1,200 $</div>
                    <div className="stat-desc"></div>
                </div>
            </div>
         
            <div>
                <div className="overflow-x-auto rounded-xl bg-white border shadow-lg">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Transiton Id</th>
                                <th>Amounr</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Balance;