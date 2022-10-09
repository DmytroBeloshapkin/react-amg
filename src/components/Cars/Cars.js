import {useEffect, useState} from "react";

import css from './Cars.module.css'
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../service";

const Cars = () => {

    const [cars, setCars] = useState([]);

    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>

            <div className={css.Cars}>
                {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate = {setCarForUpdate}/>)}
            </div>

        </div>
    )
}

export {Cars};