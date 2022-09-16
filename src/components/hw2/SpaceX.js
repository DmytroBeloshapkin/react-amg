import {useEffect, useState} from "react"
import './style.css'
import Launch from "./Launch";
import axios from "axios";
import {getUsersAxios} from "../../services/user.api.axios";


export default function SpaceX() {

    let [launch, setLaunch] = useState([]);

    useEffect(() => {
        getUsersAxios().then(value => setLaunch(value.data))
    }, []);


    return (
        <div className="SpaceX">
            {launch.map((launch, index) => (<Launch item={launch} key={index}/>))}
        </div>
    )
}


// mission_name
// launch_year
//
// links.mission_patch_small

// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)