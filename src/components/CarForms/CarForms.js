import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../validators";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForms = ({setCars}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue}= useForm({
        resolver: joiResolver(carValidator), mode:'all'});

    // useEffect(()=>{
    //     setValue('model', 'name')
    //     setValue('price', 0)
    //     setValue('year', 0)
    // },[])

    const submit = async (car) =>{
        const {data} = await carService.create(car)
        setCars(cars=>[...cars, data])
        reset()
    }

    return (
    <form onSubmit={handleSubmit(submit)} onChange={()=> console.log(errors)}>
        <input type='text' placeholder={'model'} {...register('model')}/>
        <input type='number' placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        <input type='number' placeholder={'year'} {...register('year', {valueAsNumber: true})}/>

        <button disabled={!isValid}>Save new car</button>

        {errors.model && <span>{errors.model.message}</span>}
        {errors.price && <span>{errors.price.message}</span>}
        {errors.year && <span>{errors.year.message}</span>}
    </form>
    );
};

export {CarForms};