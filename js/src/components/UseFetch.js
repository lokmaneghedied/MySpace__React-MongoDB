import { useState, useEffect } from "react";

const UseFetch = (url) => {

    const [myData, setMyData] = useState(null)
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
        {myData, error, isLoading}
     );
}
 
export default UseFetch;