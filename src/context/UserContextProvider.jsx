//Step 2
import React, { useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({children})=>{
 //passing childer is jsut like outlet in layout
    const[user, setUser] = useState(null);
 //we actually passing user and setUser
    return(
        //UserContext.Provider gives us this functionality 
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider