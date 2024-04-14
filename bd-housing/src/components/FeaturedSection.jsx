import { useContext, useEffect, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { ContentContext } from "../provider/ContextProvider";
import { Link } from "react-router-dom";
const FeaturedSection = () => {
    const { propertyData } = useContext(ContentContext)
    const [data, setData ] = useState("")

    useEffect(() => {
        setData((propertyData.sort((a, b) => parseInt(b.price.replaceAll(',', '')) - parseInt(a.price.replaceAll(',', ''))).slice(0, 1))[0])
    }, [propertyData])
    
    if (!data) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    return (
        <div className="grid grid-cols-2">
            <div className="w-full">
                <img className="w-full h-[700px] object-cover" src={data.image} alt="featured" />
            </div>
            <div className="bg-[#eb675314] flex items-center justify-center flex-col">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <button className="btn bg-[#EB6753] text-white rounded-none">
                            <img width="20" height="20" src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/FFFFFF/external-dot-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan-2.png" alt="external-dot-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan-2" />Featured
                        </button>
                        <button className="btn bg-primary text-white rounded-none">
                            <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/FFFFFF/circled-dot.png" alt="circled-dot" />For {data.status}
                        </button>
                    </div>
                    <h1 className="text-primary font-bold text-5xl">{data.estate_title}</h1>
                    <p className="text-[#717171] text-lg">{data.location}</p>
                    <div className="flex gap-6 items-center">
                        <div className="flex gap-2 items-center">
                            <div className="bg-base-100 shadow-md rounded-none w-12 h-12 flex items-center justify-center">
                                <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                            </div>
                            <p className="font-semibold text-primary">{data.area}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="bg-base-100 shadow-md rounded-none w-12 h-12 flex items-center justify-center">
                                <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                            </div>
                            <p className="font-semibold text-primary">{data.status}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="bg-base-100 shadow-md rounded-none w-12 h-12 flex items-center justify-center">
                                <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/48/lowest-price.png" alt="lowest-price" />
                            </div>
                            <p className="font-semibold text-primary">{data.price} $</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className=" space-y-4">
                            <p>Total Free Customer Care</p>
                            <p className="font-bold text-primary">(+88)123-555-888</p>
                        </div>
                        <div className=" space-y-4">
                            <p>Live Support?</p>
                            <p className="font-bold text-primary">agent@apus.com</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <Link to={`properties/${data.id}`} className="hover:cursor-pointer w-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary text-white hover:bg-primary group">
                            <span className="w-48 h-48 rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="text-center relative w-full transition-colors duration-300 ease-in-out text-white group-hover:text-white inline-flex items-center gap-2 justify-center font-bold">See Details <TbArrowUpRight /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;