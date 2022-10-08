import {useEffect, useState} from "react";
import {getUserAxios} from "../../service";

export  function UserChoser() {

    let [user, setUser] = useState(null);
    let [id, setId] = useState(1);

    const increment = () => {
        id++;
        setId(id);
    }

    const decrement = () => {
        id--;
        setId(id);
    }

    useEffect(() => {
        getUserAxios(id).then(({data}) => {
            setUser(data);
        })
    }, [id]);


    return (<div>
        <div>{JSON.stringify(user)}</div>

        <button onClick={() => {
            decrement(id)
        }}>prev
        </button>
        <button onClick={() => {
            increment(id);
        }}>next
        </button>
    </div>);
}