import { useState, useEffect } from "react";

const UseFetch = (url, setMyData) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setIsLoading(false);
            setError(null);
            setMyData(data);
        })
        .catch((err)=>{
            setMyData(null);
            setIsLoading(false);
            setError(err.message);
        })
    },[url])

    return ( 
        {error, isLoading}
     );
}
 
export default UseFetch;