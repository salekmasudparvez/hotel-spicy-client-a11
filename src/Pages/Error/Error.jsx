import { Link } from "react-router-dom";


const Error = () => {
    return (
        <>
            <section className="flex items-center h-full p-16 text-gray-900">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="flex justify-center">
                            <img className="max-w-[250px]" src="https://s3.amazonaws.com/libapps/accounts/47742/images/shutterstock_289.jpg" alt="" />
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                        <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Error;