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

const Home = () => {
    return (
        <div>
            <div className="h-[80dvh]">
                <Hero />
            </div>
            <CompanySlider />
            <About/>
            <Cities/>
            <Features />
            <Pricing/>
            <FeaturedSection />
            <FeaturedProperties/>
            <Testimonial />
            <ContactSection/>

        </div>
    );
};

export default Home;