import {useEffect, useState} from "react";

import {userService} from "../../service";
import {User} from "../user";
import {UserDetails} from "../user-details";

const Users = () => {

    let [users, setUsers] = useState([])
    const [user, setUser] = useState(null);

    const showUser =(obj) =>{
        setUser(obj)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {user&& <UserDetails key = {user.id} user = {user}/>}
            <hr/>
            {users.map((user, index) => <User key={index} user={user} showUser = {showUser}/>)}
        </div>
    );
};

export {Users};