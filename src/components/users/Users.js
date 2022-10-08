import {useEffect, useState} from "react";

import {User} from "../user";
import {fetchServiceApi} from "../../service";


const Users = () => {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetchServiceApi.then(value => {
            setUsers(value.slice(0,2))
            console.log(value);
        })
    },[])



    return (
        <div>
            {
                users.map((user, index) => <User key={index} user={user}/>)
            }
        </div>
    );
};

export {Users};