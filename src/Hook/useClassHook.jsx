import { useQuery } from "@tanstack/react-query";

const useClassHook =()=>{
   
    const {data:classes=[], isLoading: loading, refetch}= useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await fetch('https://foreign-school-server.vercel.app/classes');
            return res.json();
        }

    })


    return [classes, loading, refetch]

}

export default useClassHook;