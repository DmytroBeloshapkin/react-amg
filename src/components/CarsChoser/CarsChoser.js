import {useEffect, useState} from "react";
import {getID} from "../services";

const CarsChoser = () => {
    let [car, setCars] = useState(null)
    let [id, setId]= useState(18282)


    const increment = () => {
        id++;
        setId(id)
    }
    const decrement = () => {
        id--;
        setId(id)
    }

    useEffect(() => {
        getID(id).then(({data}) => {
            setCars(data);
        })
    }, [id]);

    return (
        <div>
            <h4>{JSON.stringify(car)}</h4>

            <button onClick={() => {
                increment(id);
            }}>next
            </button>
            <button onClick={() => {
                decrement(id);
            }}>previos
            </button>
        </div>
    );
};

export {CarsChoser};