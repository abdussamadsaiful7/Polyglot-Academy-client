import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import UseAxiosSecure from "../Axious/UseAxiosSecure";

const useStudent = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure]= UseAxiosSecure();
    const {data: isStudent, isLoading: isStudentLoading} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
          //  console.log('is admin response', res)
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading];
}

export default useStudent;