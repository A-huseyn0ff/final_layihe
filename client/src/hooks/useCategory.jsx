import axios from 'axios'
import { useEffect, useState } from 'react';
const useCategory = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get('http://localhost:8000/events');
            setCategory(response.data);    
}

fetchCategory();
},[]);
    
       
  return { category }
}

export default useCategory