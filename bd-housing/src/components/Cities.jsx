import { useContext } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { ContentContext } from "../provider/ContextProvider";
import { FaLocationDot } from "react-icons/fa6";
const Cities = () => {
    const { propertyData } = useContext(ContentContext)
    const citiesCount = propertyData.reduce((acc, data) => {
        const city = data.city;
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    const cities = Object.entries(citiesCount);

    return (
        <div className="container mx-auto mt-24">
            <h1 className="text-3xl font-bold">Properties by Cities</h1>
            <div className="flex justify-between items-center space-y-4">
                <p>Aliquam lacinia diam quis lacus euismod</p>
                <p className="inline-flex items-center gap-2">See All Cities <TbArrowUpRight /></p>
            </div>
            <div>
                <div className="grid grid-cols-4 gap-6 my-12">
                    {cities.map(([city, count]) => (
                        <div key={city} className="flex gap-4 items-center bg-base-200 p-4 rounded-none hover:cursor-pointer" title={`See all cities from ${city}`}>
                            <div>
                                <FaLocationDot />
                            </div>
                            <div>
                                <h1 className="font-bold text-xl">{city}</h1>
                                <p>{count} Properties</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cities;