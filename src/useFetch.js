{/*This is custom Hook */}

import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isPending,setPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        // console.log("UseEffect Called")
        // console.log(blogs)
        setTimeout(()=>{
        fetch(url)
         .then(res=>{
          if(!res.ok){
            throw Error('Could not fetch the data for that resource')
          }
            //this passes json into javascript object for us
            // this is asynchronous- takes some time
            // this whole thing will again returns promise
         })
         .then((data)=>{
            setData(data)
            setPending(false)
            setError(null)
        })
        .catch(err=>{
          setPending(false)
          setError(err.message)
          console.log(err.message)
        });
        },1000)
      },[url])

      return{data,isPending,error};
}
export default useFetch;