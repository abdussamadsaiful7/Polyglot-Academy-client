import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axious/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";


const  useSelectClass  = () =>{
    const {user, loading} = useContext(AuthContext);
   const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: select =[] } = useQuery({
        queryKey: ['selects', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/selects?email=${user?.email}`)
            return res.data;
        },
      })
      return [select, refetch];

}
export default useSelectClass;