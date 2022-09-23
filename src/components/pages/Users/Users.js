import {useEffect, useState} from "react";

import {pageService} from "../../../service";
import {User} from "../User";


const Users = () => {

const [users, setUsers] = useState([])

    useEffect(() => {
        pageService.getUsers().then(value => setUsers(value.data))
        }, []);

    return (
        <div>
            {users.map((user,index) => <User key={index} user={user}/>)}
        </div>
    )
}

export {Users};