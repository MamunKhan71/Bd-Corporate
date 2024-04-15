import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const ContentContext = createContext()
const ContextProvider = ({ children }) => {
    const [testimonial, setTestimonial] = useState([])
    const [propertyData, setRealData] = useState([])
    const [bookmark, setBookmark] = useState(null)

    const getId = (id) => {
        const localStorages = localStorage.getItem('pMarks')
        if (localStorages) {
            const localData = JSON.parse(localStorages);
            const updatedData = [...localData, id];
            setBookmark(updatedData);
            localStorage.setItem('pMarks', JSON.stringify(updatedData));
        } else {
            localStorage.setItem('pMarks', JSON.stringify([id]));
            setBookmark(JSON.parse(localStorage.getItem('pMarks')));
        }
    }
    useEffect(() => {
        axios.get('/real-estate.json')
            .then(res => setRealData(res.data.properties))
    }, [])
    useEffect(() => {
        axios.get('/testimonial.json')
            .then(res => setTestimonial(res.data.testimonials))
            .catch(error => console.log(error))
    }, [])
    const contents = { testimonial, propertyData, getId }
    return (
        <div>
            <ContentContext.Provider value={contents}>
                {children}
            </ContentContext.Provider>
        </div>
    );
};

export default ContextProvider;