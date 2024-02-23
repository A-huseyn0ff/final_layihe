import axios from 'axios'
import { useEffect, useState } from 'react';
const useProduct = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8000/categories');
            setdata(response.data);    
}

fetchData();
},[]);
    
       
  return { data }
}

export default useProduct