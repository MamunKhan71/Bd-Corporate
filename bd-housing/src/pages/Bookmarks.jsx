import { useContext, useEffect, useState } from "react";
import { ContentContext } from "../provider/ContextProvider";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Bookmarks = () => {
    const { propertyData } = useContext(ContentContext)
    const [data, setData] = useState(null)
    useEffect(() => {
        const bookmark = localStorage.getItem('pMarks')
        if (bookmark) {
            const newData = propertyData.filter(data => bookmark.includes(data.id))
            setData(newData);
        } else {
            setData(null)
        }
    }, [propertyData])
    return (
        <div>
            <Helmet>
                <title>BDCorporate | Bookmarks</title>
            </Helmet>
            {
                data ? <>

                    <div className="text-primary">
                        <h1 className="text-center my-12 text-primary text-4xl font-bold">Bookmarks</h1>
                        <div className="flex flex-col gap-6">
                            {
                                data.map(dta => (<>

                                    <div className="container grid grid-cols-12 mx-auto border p-4">
                                        <div style={{ backgroundImage: `url(${dta.image})` }} className="bg-no-repeat bg-cover bg-gray-700 col-span-full lg:col-span-4"></div>
                                        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                                            <div className="flex justify-start">
                                                <span className="px-2 py-1 text-xs rounded-full bg-violet-400 text-gray-900">{dta.status}</span>
                                            </div>
                                            <h1 className="text-3xl font-semibold">{dta.estate_title}</h1>
                                            <p className="flex-1 pt-2">{dta.description.slice(0, 200)}</p>
                                            <Link to={`/properties/${dta.id}`} rel="noopener noreferrer" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-400">
                                                <span>See Property</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                            </Link>
                                            <div className="flex items-center justify-between pt-2">
                                                <div className="flex space-x-2">
                                                    <FaUser />
                                                    <span className="self-center text-sm font-medium">{dta.contact_person}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>))
                            }
                        </div>
                    </div>
                </> :
                    <div className=" h-dvh flex items-center justify-center">
                        <div className="text-center flex items-center justify-center flex-col space-y-4">
                            <img className="w-64 h-64" src="/images/notfound.jpg" alt="" />
                            <h1 className="mb-4 text-6xl font-semibold text-red-500">No Bookmarks Found</h1>
                            <p className="mb-4 text-lg text-gray-600">Please add bookmarks to see here</p>
                            <div className="animate-bounce">
                                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </div>
                            <p className="mt-4 text-gray-600">Let's get you to <Link to="/properties" className="text-blue-500">Property list</Link>.</p>
                        </div>
                    </div>
            }
        </div >
    );
};

export default Bookmarks;