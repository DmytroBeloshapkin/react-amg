import {useEffect, useState} from "react";

import {pageService} from "../../../../service";
import {User} from "../User/User";
import css from './Users.module.css'


const Users = () => {

const [users, setUsers] = useState([])

    useEffect(() => {
        pageService.getUsers().then(value => setUsers(value.data))
        }, []);

    return (
        <div>
            <div className={css.namePage}>Users page</div>
            <div className={css.Users}>
                {users.map((user, index) => <User key={index} user={user}/>)}
            </div>
        </div>
    )
}

export {Users};