import {useEffect, useState} from "react";

import {Car} from "../Car";
import {get, getCars} from "../services";
import css from 'Car.module.css'

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
        <div className={}>
            <hr/>
            {car && <div> ціна: {car.price} </div>}
            <hr/>

            {cars.map((car, index) =>
                (<Car
                    item={car}
                    key={index}
                    lift = {lift}/>))}
        </div>
    );
};

export {Cars};