import {useEffect, useState} from "react";

import {User} from "../user";
import {getUsersAxios} from "../../service";


const Users = () => {

    let [users, setUsers] = useState([])
    let [user, setUser] = useState(null)

    const lift = (obj) =>{
        setUser(obj)
    }

    useEffect(() => {
        getUsersAxios().then(value => {
            setUsers(value.data.slice(0,5))
            console.log(value.data);
        })
    },[])

    return (
        <div>
            <hr/>
            {user && <div>{JSON.stringify(user)}</div>}
            <hr/>
            {users.map((user, index) => <User key={index} user={user} lift={lift}/>)}
        </div>
    );
};

export {Users};