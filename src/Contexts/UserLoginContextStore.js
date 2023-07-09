import axios from "axios";
import React,{ useState} from "react";
import { loginContext } from "./loginContext";

function UserLoginContextStore({children}){
    let [currentUser,setCurrentUser]=useState({});
    let [error,setError]=useState("");
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    
    //user Login
    const loginUser=(userCredObj)=>{
        axios.post('http://localhost:4000/users-api/login',userCredObj)
        .then(response=>{
            console.log(response);
            if(response.data.message ==="success"){
                setCurrentUser({...response.data.user})
                //save token to local storage
                localStorage.setItem("token",response.data.token)
                setError("")
                setUserLoginStatus(true)
            }else{
                setError(response.data.message)
            }
        })
        .catch(err=>{
            console.log(err);
            setError(err.message);
        })
        console.log(currentUser);
    }

    //user Logout
    const logoutUser=()=>{
        localStorage.clear();
        setUserLoginStatus(false);
    }

    return(
        <loginContext.Provider value={[currentUser,error,userLoginStatus,loginUser,logoutUser]}>
            {children}
        </loginContext.Provider>
    )
}

export default UserLoginContextStore;