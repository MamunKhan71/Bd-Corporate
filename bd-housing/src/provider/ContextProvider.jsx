import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const ContentContext = createContext()
const ContextProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(()=>{
        axios.get('testimonial.json')
            .then(res => setTestimonial(res.data.testimonials))
            .catch(error => console.log(error))
    },[])
    console.log(testimonial)
    const contents = {testimonial}
    return (
        <div>
            <ContentContext.Provider value={contents}>
                {children}
            </ContentContext.Provider>
        </div>
    );
};

export default ContextProvider;