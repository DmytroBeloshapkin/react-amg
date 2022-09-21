import {useEffect, useState} from "react";

import {CarForms} from "../CarForms/CarForms";
import {carService} from "../../services";
import {Car} from "../Car/Car";
import css from './Cars.module.css'

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForms setCars = {setCars}/>
            <hr/>
            <div className={css.container}>
                {cars.map(car => <Car key={car.id} car={car} setCars = {setCars}/>)}
            </div>

        </div>
    )
}

export {Cars};

