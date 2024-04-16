import { IoIosCall } from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";
const ContactSection = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-around bg-[#F7F7F7] p-12 mb-24">
            <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-primary">Need help? Talk to our expert.</h1>
                <p className="text-primary">Talk to our experts or Browse through more properties.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-end items-center">
                <button className="bg-primary btn text-white inline-flex gap-2 items-center text-lg rounded-none w-full lg:w-auto">Contact Us <TbArrowUpRight /></button>
                <button className="border-primary btn border-2 text-primary bg-transparent inline-flex gap-2 rounded-none items-center text-lg w-full lg:w-auto"><IoIosCall />920 851 8585</button>
            </div>
        </div>
    );
};

export default ContactSection;