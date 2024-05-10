
const RoomsList = () => {
    return (
        <>
            <tr className="border-b border-opacity-20 border-gray-700 ">
                <td className="p-3">
                    <p>97412378923</p>
                </td>
                <td className="p-3">
                    <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                    <p>14 Jan 2022</p>
                    <p className="text-gray-400">Friday</p>
                </td>
                <td className="p-3">
                    <p>01 Feb 2022</p>
                    <p className="text-gray-400">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                    <p>$15,792</p>
                </td>
                <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                        <span>Pending</span>
                    </span>
                </td>
            </tr>
        </>
    );
};

export default RoomsList;
