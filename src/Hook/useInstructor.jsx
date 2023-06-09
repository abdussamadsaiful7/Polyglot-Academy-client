import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosSecure from "../Axious/UseAxiosSecure";

const useInstructor = () => {
    const { user,loading } = useContext(AuthContext);
    const [axiosSecure]= UseAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
          //  console.log('is admin response', res)
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading];
}

export default useInstructor;