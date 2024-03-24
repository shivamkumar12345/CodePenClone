 import React,{useEffect, useState} from "react";
 const prefix = "code-pen-";
 export default function useLocalStorage(key,initialValue){
    const prefixKey = prefix+key;
    const [value, setValue] = useState(()=>{
        const localVal = localStorage.getItem(prefixKey);
        // console.log(localVal);
        if(localVal !== undefined && localVal !== null) return JSON.parse(localVal);
       if(typeof initialValue == 'function'){
        return initialValue()
       }else{
        return initialValue
       }
    });
    useEffect(() => {
      localStorage.setItem(prefixKey,JSON.stringify(value));
    
      
    }, [prefixKey,value])
    
    return [value,setValue];

 }