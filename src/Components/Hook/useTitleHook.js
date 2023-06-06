
import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title= `Polyglot Academy | ${title}`;
    },[title])
};

export default useTitleHook;