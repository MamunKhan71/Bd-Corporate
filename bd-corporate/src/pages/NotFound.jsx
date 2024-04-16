import { Link } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>BDCorporate | 404 Not Found</title>
            </Helmet>
            <section className="relative z-10 bg-primary h-dvh flex items-center justify-center bg-[url(/images/Hexagon.svg)] px-4 lg:px-0">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4 animate__animated animate__bounceIn">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2
                                    className="mb-2 text-9xl font-bold leading-none text-white"
                                >
                                    404
                                </h2>
                                <h4
                                    className="mb-3 text-2xl font-semibold leading-tight text-white"
                                >
                                    Oops! That page can’t be found
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    The page you are looking for it maybe deleted
                                </p>
                                <Link to="/"
                                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
                                >
                                    Go To Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default NotFound;