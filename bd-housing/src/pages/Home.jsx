import About from "../components/About";
import Cities from "../components/Cities";
import CompanySlider from "../components/CompanySlider";
import ContactSection from "../components/ContactSection";
import FeaturedProperties from "../components/FeaturedProperties";
import FeaturedSection from "../components/FeaturedSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import ScrollToTop from "react-scroll-to-top";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
const Home = () => {


    return (
        <div>
            <div className="h-[80dvh]">
                <Hero />
            </div>
            <div className="space-y-48">
                <CompanySlider />
                <About />
                <Cities />
                <Features />
                <Pricing />
                <FeaturedSection />
                <FeaturedProperties />
                <Testimonial />
                <ContactSection />
                <ScrollToTop
                    smooth
                    viewBox="0 0 28 28"
                    component={<MdOutlineVerticalAlignTop className="text-4xl text-white bg-primary h-12 w-12" />}
                />
            </div>

        </div>
    );
};

export default Home;