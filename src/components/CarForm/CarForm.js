import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidatro} from "../validators";
import {carService} from "../../service";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidatro),
        mode: 'all'
    })


    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    // useEffect(() => {
    //     setValue('model', 'Mercedes')
    //     setValue('price', '15000')
    //     setValue('year', '2012')
    // }, [setValue])

    const submit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateById(carForUpdate.id, car);
            setCars((cars) => {
                const findCar = cars.find(value => value.id === carForUpdate.id);
                Object.assign(findCar, data)
                setCarForUpdate(null)
                return [...cars]
            })
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data])
        }

        reset()
    };

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
            <button disabled={!isValid}>{carForUpdate ?' Update' : 'Save'}</button>

            <div>
                {errors.model && <span>{errors.model.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>

        </form>
    );
};

export {CarForm};