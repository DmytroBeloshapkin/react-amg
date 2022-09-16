import {useEffect, useState} from "react";

import './style.css'
import User from "./User";
import {getUsers} from "../../services";


function Users() {

    const [users, setUsers] = useState([])

    const [user, setUser] = useState(null)

    const lift = (obj) => {
        setUser(obj.address)
    }

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value)
        })

    }, []);

    return (
        <div className='users'>
            <h2 className='h2'>from API jsonplaceholder</h2>
            <div className='containerUser'>{users.map(user => <User key={user.id} user={user} lift={lift}/>)}</div>
            <div/>
            {user && <div className='info'>Address: {JSON.stringify(user)}</div>}
            <div/>
        </div>
    )
}

export default Users;


