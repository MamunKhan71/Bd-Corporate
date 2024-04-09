import { IoIosCall } from "react-icons/io";
import { TbArrowUpRight } from "react-icons/tb";
const ContactSection = () => {
    return (
        <div className="container mx-auto flex items-center justify-around bg-[#F7F7F7] p-12 rounded-none">
            <div>
                <h1 className="text-3xl font-bold text-primary">Need help? Talk to our expert.</h1>
                <p className="text-primary">Talk to our experts or Browse through more properties.</p>
            </div>
            <div className="flex gap-4 justify-end items-center">
                <button className="bg-primary btn text-white inline-flex gap-2 items-center text-lg rounded-none">Contact Us <TbArrowUpRight/></button>
                <button className="border-primary btn border-2 text-primary bg-transparent rounded-none inline-flex gap-2 items-center text-lg"><IoIosCall/>920 851 8585</button>
            </div>
        </div>
    );
};

export default ContactSection;