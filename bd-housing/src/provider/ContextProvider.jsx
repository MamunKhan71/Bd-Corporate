import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const ContentContext = createContext()
const ContextProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState([])
    const [propertyData, setRealData] = useState([])
    useEffect(()=>{
        axios.get('real-estate.json')
            .then(res => setRealData(res.data.properties))
    },[])
    console.log(propertyData);
    useEffect(()=>{
        axios.get('testimonial.json')
            .then(res => setTestimonial(res.data.testimonials))
            .catch(error => console.log(error))
    },[])
    const contents = {testimonial, propertyData}
    return (
        <div>
            <ContentContext.Provider value={contents}>
                {children}
            </ContentContext.Provider>
        </div>
    );
};

export default ContextProvider;