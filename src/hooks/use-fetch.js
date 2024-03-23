import { useEffect, useState } from "react"
import client from "@/lib/sanityClient";

const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   
   useEffect(() => {
      (async () => {
         setLoading(true);
         setError(null);
         
         try {
            const response = await client.fetch(url)
            setData(response);
         }
         catch(error){
            setError(error);
         }  
         finally {
            setLoading(false);
         }
      })()
      
      return () => {
         console.log('Fetching cancelled or component unmounted');
      }
   }, [url])
   
   return { data, setData, loading, error }
} 

export default useFetch