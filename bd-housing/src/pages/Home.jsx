import Cities from "../components/Cities";
import CompanySlider from "../components/CompanySlider";
import FeaturedProperties from "../components/FeaturedProperties";
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
            <Cities/>
            <Features />
            <FeaturedSection />
            <FeaturedProperties/>
            <Testimonial />

        </div>
    );
};

export default Home;