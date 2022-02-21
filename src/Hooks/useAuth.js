import { useSelector } from "react-redux";

function useAuth() {
    const {email,token,id,name} = useSelector(({register}) => register);

    return {
        isAuth: !!email,
        email,
        token,
        id,
        name
    };
};

export default useAuth;