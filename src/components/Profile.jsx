//from here we learn how to show data
import React, {useContext} from 'react';
import UserContext from '../context/UserContext';


const Profile = () => {

    //receiving data
    const {user} = useContext(UserContext);

   if(!user) return <div>Please Login...</div>

   return <div> <h2>Welcome {user.username} and your password is {user.password}</h2></div>
};

export default Profile;