import { TbArrowUpRight } from "react-icons/tb";

const Cities = () => {
    return (
        <div className="container mx-auto mt-24">
            <h1 className="text-3xl font-bold">Properties by Cities</h1>
            <div className="flex justify-between items-center space-y-4">
                <p>Aliquam lacinia diam quis lacus euismod</p>
                <p className="inline-flex items-center gap-2">See All Cities <TbArrowUpRight /></p>
            </div>
            <div className="grid grid-cols-3 gap-6 my-12">
                <div className="flex gap-4 items-center bg-base-200 p-4 rounded-none">
                    <div className="w-24 h-24">
                        <img className="w-full h-full object-cover rounded-none" src="images/header.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Dhaka</h1>
                        <p>10 Properties</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-base-200 p-4 rounded-none">
                    <div className="w-24 h-24">
                        <img className="w-full h-full object-cover rounded-none" src="images/header.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Chittagong</h1>
                        <p>10 Properties</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-base-200 p-4 rounded-none">
                    <div className="w-24 h-24">
                        <img className="w-full h-full object-cover rounded-none" src="images/header.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Barishal</h1>
                        <p>10 Properties</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cities;