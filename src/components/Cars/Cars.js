import {useEffect, useState} from "react";

import {Car} from "../Car";
import {get} from "../services";
import './style.css'

const Cars = () => {

let [cars, setCars] = useState([]);

let [car, setCar] = useState({});

const lift  = (obj) =>{
    console.log(obj);
    setCar(obj);
}

useEffect(()=>{
    // getCars().then(value => setCars(value))
    // },[])

    get().then(value => setCars(value.data))
    },[]);


    return (
        <div>
            <hr/>
            {car && <div> ціна: {car.price} </div>}
            <hr/>

        <div className='cars'>
            {cars.map((car, index) =>
                (<Car
                    item={car}
                    key={index}
                    lift = {lift}/>))}
        </div>
        </div>
    );
};

export {Cars};