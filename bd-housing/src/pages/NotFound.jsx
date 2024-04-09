import { Link } from "react-router-dom";
import 'animate.css';

const NotFound = () => {
    return (
        <>
            <div className="">
                <div className="min-h-screen flex items-center justify-center">
                    <div className="bg-base-200 text-primary shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-gray-200 text-center p-24 animate__animated animate__zoomIn">
                            <h1 className="text-9xl font-bold text-primary">404</h1>
                            <h1 className="text-6xl font-medium py-8 text-gray-500">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium text-gray-500">
                                Oops! The page you are looking for does not exist. It might have
                                been moved or deleted.
                            </p>
                            <Link to="/" className="bg-gradient-to-r bg-primary hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                Home
                            </Link>
                            <Link to="/login" className="bg-gradient-to-r  bg-primary hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default NotFound;