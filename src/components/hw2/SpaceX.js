import {useEffect, useState} from "react"
import {getUsersAxios} from "../../services";

import './style.css'
import Launch from "./Launch";


export default function SpaceX() {

    let [launch, setLaunch] = useState([]);

    useEffect(() => {
        getUsersAxios().then(value => setLaunch(value.data))
    }, []);


    return (
        <div className="SpaceX">
            <h2 className='h2'>from API spacexdata</h2>
            {launch
                .filter(value => value.launch_year !== '2020')
                .map((launch, index) => (
                <Launch launch={launch} key={index}/>))}
        </div>
    )
}


