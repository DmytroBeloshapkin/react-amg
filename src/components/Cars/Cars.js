import {useEffect, useState} from "react";

import css from './Cars.module.css'
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../service";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars}/>

            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car} setCars={setCars}/>)}
            </div>

        </div>
    )
}

export {Cars};