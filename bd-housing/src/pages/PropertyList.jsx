import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbArrowUpRight } from "react-icons/tb";
import { ContentContext } from "../provider/ContextProvider";
import { ScrollRestoration } from "react-router-dom";
const PropertyList = () => {
    const [value, setValue] = useState(25)
    const { propertyData } = useContext(ContentContext)

    const handleChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return (
        <div className="w-full container mx-auto mt-12 animate__animated animate__fadeIn">
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
                    <div className="grid grid-cols-4 py-12 gap-6">
                        <div>
                            <div className="card bg-base-100 shadow-xl rounded-none">
                                <div className="card-body space-y-4">
                                    <h1 className="font-bold">Select Type</h1>
                                    <div className="flex gap-4 justify-between items-center">
                                        <button className="flex-1 bg-primary btn text-white rounded-none">For Sale</button>
                                        <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none">For Rent</button>
                                    </div>
                                    <p className="font-semibold">Property Range</p>
                                    <input onChange={handleChange} type="range" min={0} max={50000} value={value} className="range range-xs" step="10000" />
                                    <div className="w-full flex justify-between text-xs px-2">
                                        <span>0</span>
                                        <span>10k</span>
                                        <span>20k</span>
                                        <span>30k</span>
                                        <span>40k</span>
                                        <span>50k</span>
                                    </div>
                                    <div className="space-y-4">
                                        <h1 className="font-bold">Beds</h1>
                                        <div className="flex gap-4 justify-between items-center">
                                            <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none">1</button>
                                            <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none">2</button>
                                            <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none">3</button>
                                            <button className="flex-1 border-primary btn border-2 text-primary bg-transparent rounded-none">4</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 grid grid-cols-3 gap-6">
                            {
                                propertyData.map(data => <>
                                    <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                                        <figure><img className="h-72 w-full object-cover" src={data.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data.estate_title}</h2>
                                            <p>132 Greene Ave</p>
                                            <div className="flex gap-6 items-center">
                                                <div className="flex gap-2 items-center">
                                                    <div className="w-12 h-12 flex items-center justify-center">
                                                        <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                                                    </div>
                                                    <p className="font-semibold text-primary">{data.area}</p>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <div className="w-12 h-12 flex items-center justify-center">
                                                        <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                                                    </div>
                                                    <p className="font-semibold text-primary">{data.status}</p>
                                                </div>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <button className="btn bg-primary text-white rounded-none">$ {data.price.split('/')[0]}</button>
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
            <ScrollRestoration/>
        </div>
    );
};

export default PropertyList;