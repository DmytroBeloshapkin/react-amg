import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidatro} from "../validators";
import {carService} from "../../service";

const CarForm = ({setCars}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidatro),
        mode: 'all'
    })

    useEffect(() => {
        setValue('model', 'Mercedes')
        setValue('price', '15000')
        setValue('year', '2012')
    }, [])


    const submit = async (car) => {
        const {data} = await carService.create(car)
        console.log(data)
        setCars(cars => [...cars, data])
        reset()
    }

    return (
        // <form onSubmit={handleSubmit(submit)} onChange={() => {
        //     console.log(errors)
        // }}>
        //     <input type="text" placeholder={'model'} {...register('model', {
        //         required: true,
        //         minLength: {value: 2, message: 'min 2 characters'}
        //     })}/>
        //     <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        //     <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        //     {errors.model && <span>{errors.model.message}</span>}
        //     <button disabled={!isValid}>Save</button>
        // </form>

        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="number" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button disabled={!isValid}>Save</button>

            <div>
                {errors.model && <span>{errors.model.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>

        </form>
    );
};

export {CarForm};