import { useQuery } from "@tanstack/react-query";

const useInst =()=>{
   
    const {data:instructors=[], isLoading: loading, refetch}= useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await fetch('https://foreign-school-server.vercel.app/instructors');
            return res.json();
        }

    })


    return [instructors, loading, refetch]

}

export default useInst;