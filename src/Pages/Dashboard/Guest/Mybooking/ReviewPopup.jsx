
import { useNavigate } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { PropTypes } from 'prop-types';
import useAuth from "../../../../Hook/useAuth";


const ReviewPopup = ({ handleReview }) => {
    const { user } = useAuth();
    const navigateList = useNavigate()

    return (
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-neutral-200 text-gray-900">
            <form onSubmit={handleReview} className="flex flex-col items-center w-full">
                <h2 className="text-3xl font-semibold text-center">Please give your feedback!</h2>
                <div className="flex w-full flex-col items-center py-6 space-y-4">
                    <span className="text-center">How was your experience?</span>

                    <div className="flex text-left border w-full gap-2 justify-start items-center">
                        <div className="text-lg">
                            <h1 className="flex mx-2 justify-center items-center"><IoIosStar /> Rating:</h1>
                        </div>
                        <div className="w-full">
                            <select name="ratings" className="select select-bordered w-full max-w-xs" required>
                                <option disabled selected>Please select rating </option>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>

                            </select>
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" name="name" value={user?.displayName} className="grow" placeholder="Username" required />
                        </label>
                    </div>

                </div>
                <div className="flex flex-col w-full">
                    <textarea name="comment" rows="3" placeholder="Comment" className="p-4 rounded-md resize-none text-gray-900 "></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold btn rounded-md text-gray-900 bg-violet-400">Leave feedback</button>
                </div>
            </form>
            <div className="flex items-center justify-center ">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={() => navigateList(`/rooms`)} className="btn btn-link text-sm text-gray-600">Maybe later</button>
                </form>
            </div>
        </div>
    );
};
ReviewPopup.propTypes={
    handleReview:PropTypes.func
}

export default ReviewPopup;
