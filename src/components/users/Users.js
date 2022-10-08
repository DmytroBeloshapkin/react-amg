import {User} from "../user/User";
import {useState} from "react";


const Users = () => {

    let [users, setUsers] = useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((value) => value.json())
        .then(value => {
            setUsers(value)
        })

    return (
        <div>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    );
};

export {Users};