import React from "react";
import UserItem from "./UserItem";
import Spinner from "../leyout/Spinner";
import propTypes from 'prop-types';


const Users=({users,loading})=> {

    if (loading) {
       return <Spinner/>
    }else{

        return(
            <>
          <div className="card-2">
            {users.map( user=>(
          <UserItem key={user.id} user={user}/> 
           ))}
          </div>

            </>
        )
    }
        
    }
Users.propTypes={
    users: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired
}


export default Users;