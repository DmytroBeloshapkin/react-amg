import {useReducer} from "react";
import {reducer} from "./reducer";

const useAnimals = () => useReducer(reducer, {cats: [], dogs: []});

export {
    useAnimals
}