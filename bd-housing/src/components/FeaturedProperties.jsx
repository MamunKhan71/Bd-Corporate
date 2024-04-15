import { useContext } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ContentContext } from "../provider/ContextProvider";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { FaRegDotCircle } from "react-icons/fa";

const FeaturedProperties = () => {
    const { propertyData } = useContext(ContentContext);
    // console.log(propertyData);
    const data = (propertyData.sort((a, b) => parseInt(b.price.replaceAll(',', '')) - parseInt(a.price.replaceAll(',', ''))).slice(0, 4));
    return (
        <div className="mt-24 container mx-auto space-y-4">
            <h1 className="text-center font-bold text-3xl">Our Featured Properties</h1>
            <p className="text-center">Start your property search here.</p>
            <div className="grid grid-cols-4 gap-6 py-12">
                {
                    data.map(data => (
                        <>
                            <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                                <figure className="relative"><img className="h-72 w-full object-cover" src={data.image} alt="Shoes" />
                                    <div className="flex gap-2 absolute bottom-4 right-4">
                                        <p className="text-xs font-semibold text-primary bg-white p-2">{data.segment_name}</p>
                                        <p className="text-xs font-semibold text-primary bg-white p-2">{data.area}</p>
                                    </div>
                                    <p className="absolute top-4 right-4 text-xs font-semibold text-white bg-[#EB6753] p-2 inline-flex gap-2 items-center"><FaRegDotCircle className="text-base" />{data.status}</p>
                                </figure>
                                <div className="card-body space-y-2">
                                    <h2 className="card-title">{data.estate_title}</h2>
                                    <p className="text-base font-medium inline-flex items-center gap-2"><RiPriceTag2Line />{data.price.split('/')[0]} $</p>
                                    <p className="inline-flex font-medium gap-2 items-center"><TbCurrentLocation className="text-xl" />{data.location}</p>
                                    <div className="flex gap-1 justify-start flex-wrap">
                                        {
                                            data.facilities.map(data => <>
                                                <span className="text-gray-500 text-xs border border-[#EB6753] p-1">{data}</span>
                                            </>)
                                        }
                                    </div>
                                    <div className="card-actions justify-end ">
                                        <Link to={`properties/${data.id}`} className="btn bg-primary text-white rounded-none flex-1">View Property</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
            <div className="flex gap-2 items-center justify-center">
                <Link to="/properties" className="flex items-center justify-center gap-2 bg-primary text-white rounded-none btn">
                    <p>Learn More</p>
                    <TbArrowUpRight />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProperties;