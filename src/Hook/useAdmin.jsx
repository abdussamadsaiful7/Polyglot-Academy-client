import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosSecure from "../Axious/UseAxiosSecure";

const useAdmin = () => {
    const { user,loading } = useContext(AuthContext);
    const [axiosSecure]= UseAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
          //  console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
}

export default useAdmin;