import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axious/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";


const  usePayment  = () =>{
    const {user, loading} = useContext(AuthContext);
   const [axiosSecure] = UseAxiosSecure();

    const { refetch, data: payment =[] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data;
        },
      })
      return [payment, refetch];

}
export default usePayment;