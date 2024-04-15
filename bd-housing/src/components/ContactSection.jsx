import { IoIosCall } from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";
const ContactSection = () => {
    return (
        <div className="container mx-auto flex flex-col space-y-4 lg:flex-row items-center py-12 lg:py-0 justify-around bg-[#F7F7F7] px-6 lg:p-12 rounded-none">
            <div className="text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold text-primary">Need help? Talk to our expert.</h1>
                <p className="text-primary">Talk to our experts or Browse through more properties.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-end items-center">
                <button className="bg-primary btn text-white inline-flex gap-2 items-center text-lg rounded-none w-full">Contact Us <TbArrowUpRight/></button>
                <button className="border-primary btn border-2 text-primary bg-transparent rounded-none inline-flex gap-2 items-center text-lg w-full"><IoIosCall/>920 851 8585</button>
            </div>
        </div>
    );
};

export default ContactSection;