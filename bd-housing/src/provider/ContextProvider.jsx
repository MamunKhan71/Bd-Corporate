import { createContext, useEffect, useState } from "react";

export const ContentContext = createContext()
const ContextProvider = ({children}) => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(()=>{
        fetch()
    },[])
    const contents = {}
    return (
        <div>
            <ContentContext.Provider value={contents}>
                {children}
            </ContentContext.Provider>
        </div>
    );
};

export default ContextProvider;