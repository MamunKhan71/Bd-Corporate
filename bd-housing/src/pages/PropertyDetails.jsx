import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContentContext } from "../provider/ContextProvider";

const PropertyDetails = () => {
    const id = useParams('id').id
    const { propertyData } = useContext(ContentContext)
    const data = propertyData.find(prop => prop.id == id)
    return (
        <div className="container mx-auto space-y-8 my-12">
            <div className="w-full h-[600px] flex items-center justify-center bg-[url(images/wavey-fingerprint.svg)]">
                <img className="h-96 w-96 object-cover ring-2 ring-offset-4 shadow-2xl" src={data.image} alt="header" />
            </div>
            <div className="grid grid-cols-6 gap-6 items-center">
                <div className="col-span-4 space-y-8">
                    <h1 className="text-3xl font-bold">{data.estate_title}</h1>
                    <h1 className="text-xl font-bold">Price : {data.price} $</h1>
                    <p className="text-justify leading-8">{data.description}</p>
                    <h1 className="text-2xl font-bold">Facilities</h1>
                    <div className="flex gap-4">
                        {
                            data.facilities.map(data => <>
                                <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-primary cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-[#EB6753] ease focus:outline-none">
                                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                                    <span className="relative z-20 flex items-center text-sm">
                                        {data}
                                    </span>
                                </a>
                            </>)
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="card bg-base-100 shadow-xl rounded-none">
                        <div className="card-body space-y-4">
                            <h2 className="card-title">Property Details</h2>
                            <hr />
                            <div className="flex justify-between">
                                <div className="space-y-4 font-semibold">
                                    <p>Location</p>
                                    <p>Status</p>
                                    <p>Contact Person</p>
                                    <p>Contact Number</p>
                                </div>
                                <div className="space-y-4">
                                    <p>: {data.location}</p>
                                    <p>: {data.status}</p>
                                    <p>: {data.contact_person}</p>
                                    <p>: {data.contact_number}</p>
                                </div>
                            </div>
                            <button className="btn bg-primary rounded-none text-white">Contact Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;