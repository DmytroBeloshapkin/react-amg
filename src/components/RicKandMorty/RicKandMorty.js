import User from "./User"
import {useState} from "react"


export default function Morty() {

    let [users, setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then((value) => value.json())
        .then(value => {
                setUsers(value.results)
            }
        );

    return (
        <div className="container2">
            {users.map(user => (<User item={user} key={user.id}/>))}
        </div>
    )
}