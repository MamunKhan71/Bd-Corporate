import { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbArrowUpRight } from "react-icons/tb";
import { ContentContext } from "../provider/ContextProvider";
import { Link, ScrollRestoration } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import { RiPriceTag2Line } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { FaRegDotCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const PropertyList = () => {
    const [value, setValue] = useState(25)
    const [maxData, setMaxData] = useState([])
    const { propertyData } = useContext(ContentContext)
    const [filteredData, setFilteredData] = useState([])
    useEffect(() => {
        if (propertyData.length > 0) {
            const maxPrice = propertyData.reduce((max, property) => {
                const price = parseInt(property.price.replaceAll(',', ''));
                return price > max ? price : max;
            }, 0);
            setMaxData(maxPrice);
        }
    }, [propertyData]);
    const statusFilter = (status) => {
        setFilteredData(propertyData.filter(data => data.status == status))
    }
    const handleChange = (e) => {
        setValue(e.target.value)
        setFilteredData((propertyData.filter(data => parseInt(data.price.split('/')[0].replaceAll(',', '')) <= e.target.value)));
    }
    return (
        <div className="w-full container mx-auto mt-12 animate__animated animate__fadeIn">
            <Helmet>
                <title>BDCorporate | Property Lists</title>
            </Helmet>
            <div className="h-[600px] px-96 space-y-4 flex flex-col items-center justify-center w-full bg-[url(/images/banner.jpeg)] bg-cover rounded-2xl">
                <h1 className="text-5xl leading-[70px] text-center font-bold ">Easy Way to Find a Perfect Property</h1>
                <p>From as low as $10 per day with limited time offer discounts.</p>
                <div className="w-full flex flex-col gap-4">
                    <div className="rounded-xl">
                        <div role="tablist" className="tabs tabs-lifted rounded-xl" >
                            <input type="radio" name="my_tabs_2" role="tab" className="tab font-semibold" aria-label="For Sale" checked />
                            <div role="tabpanel" className="tab-content bg-base-100 rounded-xl border-base-300 p-6 w-full">
                                <div className="flex items-center w-full gap-6">
                                    <input type="text" className="w-full p-3 bg-base-200 rounded-xl" placeholder="Enter an address, neighborhood, city, or ZIP code" />
                                    <div className="">
                                        <button className="btn btn-active btn-neutral btn-circle"><CiSearch className="text-3xl" /></button>
                                    </div>
                                </div>
                            </div>

                            <input type="radio" name="my_tabs_2" role="tab" className="tab font-semibold" aria-label="For Rent" />
                            <div role="tabpanel" className="tab-content bg-base-100 rounded-xl border-base-300 p-6">
                                <div className="flex items-center w-full gap-6">
                                    <input type="text" className="w-full p-3 bg-base-200 rounded-xl" placeholder="Enter an address, neighborhood, city, or ZIP code" />
                                    <div className="">
                                        <button className="btn btn-active btn-neutral btn-circle"><CiSearch className="text-3xl" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-24 container mx-auto space-y-4">
                    <h1 className="text-center font-bold text-3xl">Our Featured Properties</h1>
                    <p className="text-center">Aliquam lacinia diam quis lacus euismod</p>
                    <div className="grid grid-cols-5 py-12 gap-6">
                        <div>
                            <div className="card bg-base-100 shadow-xl rounded-none">
                                <div className="card-body space-y-4">
                                    <h1 className="font-bold">Select Type</h1>
                                    <div className="flex gap-4 justify-between items-center">
                                        <button className="flex-1 bg-primary btn text-white rounded-none" onClick={() => statusFilter('Sale')}>For Sale</button>
                                        <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none" onClick={() => statusFilter('Rent')}>For Rent</button>
                                    </div>
                                    <p className="font-semibold">Property Range</p>
                                    <input onChange={handleChange} type="range" min={0} max={maxData} value={value} className="range range-xs" step="10000" />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>0</span>
                                        <span>|</span>
                                        <span>|</span>
                                        <span>|</span>
                                        <span>|</span>
                                        <span>{String(maxData).slice(0, 2)}k</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid grid-cols-3 gap-6">
                            {
                                filteredData.map(data => <>
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
                                                <Link to={`${data.id}`} className="btn bg-primary text-white rounded-none flex-1">View Property</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex items-center justify-center gap-2 bg-primary text-white rounded-none btn">
                            <p>Learn More</p>
                            <TbArrowUpRight />
                        </div>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
            <ScrollToTop
                smooth
                viewBox="0 0 28 28"
                component={<MdOutlineVerticalAlignTop className="text-4xl text-white bg-primary h-12 w-12" />}
            />
        </div>
    );
};

export default PropertyList;