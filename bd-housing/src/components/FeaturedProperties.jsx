import { TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";



const FeaturedProperties = () => {
    return (
        <div className="mt-24 container mx-auto space-y-4">
            <h1 className="text-center font-bold text-3xl">Our Featured Properties</h1>
            <p className="text-center">Aliquam lacinia diam quis lacus euismod</p>
            <div className="flex gap-4 justify-end items-center">
                <button className="bg-primary btn text-white rounded-none">For Sale</button>
                <button className="border-primary btn border-2 text-primary bg-transparent rounded-none">For Rent</button>
            </div>
            <div className="grid grid-cols-4 gap-6 py-12">
                <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                    <figure><img className="h-72 object-cover" src="images/header3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury Family Home</h2>
                        <p>132 Greene Ave</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                                </div>
                                <p className="font-semibold text-primary">9 Beds</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                                </div>
                                <p className="font-semibold text-primary">Sale</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-primary text-white rounded-none">$ 5,500</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                    <figure><img className="h-72 object-cover" src="images/header2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury Family Home</h2>
                        <p>132 Greene Ave</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                                </div>
                                <p className="font-semibold text-primary">9 Beds</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                                </div>
                                <p className="font-semibold text-primary">Sale</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-primary text-white rounded-none">$ 5,500</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                    <figure><img className="h-72 object-cover" src="images/header.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury Family Home</h2>
                        <p>132 Greene Ave</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                                </div>
                                <p className="font-semibold text-primary">9 Beds</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                                </div>
                                <p className="font-semibold text-primary">Sale</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-primary text-white rounded-none">$ 5,500</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl rounded-none">
                    <figure><img className="h-72 object-cover" src="images/header3.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Luxury Family Home</h2>
                        <p>132 Greene Ave</p>
                        <div className="flex gap-6 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="20" src="https://img.icons8.com/ios/50/length.png" alt="length" />
                                </div>
                                <p className="font-semibold text-primary">9 Beds</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img width="20" height="204" src="https://img.icons8.com/material-two-tone/24/spinner-frame-5.png" alt="spinner-frame-5" />
                                </div>
                                <p className="font-semibold text-primary">Sale</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn bg-primary text-white rounded-none">$ 5,500</button>
                        </div>
                    </div>
                </div>
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