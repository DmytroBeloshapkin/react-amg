import {useState} from "react";

import {User} from "../user/User";
import {fetch} from "../../service/fetch.api.servicejs";

const Users = () => {

    let [users, setUsers] = useState()

    fetch.then(value => {setUsers(value)
        }
        )



    return (
    <div>

        {
            users.map((user, index) => <User key = {index} user = {user}/>)
        }


    </div>
    );
};

export {Users};