import CompanySlider from "../components/CompanySlider";
import FeaturedSection from "../components/FeaturedSection";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div>
            <div className="h-[80dvh]">
                <Hero />
            </div>
            <CompanySlider />
            <Features />
            <FeaturedSection />
            <Testimonial />
        </div>
    );
};

export default Home;