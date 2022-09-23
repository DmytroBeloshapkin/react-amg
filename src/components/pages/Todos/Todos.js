import {useEffect, useState} from "react";
import {pageService} from "../../../service";

import Todo from "./Todo";


const Todos = () => {

    let [todos, setTodos]= useState([])

    useEffect(()=>{
        pageService.getTodos().then(value => setTodos(value.data))
    },[]);

    return (
    <div>
        {todos.map((todo,index) => (<Todo key = {index} todo = {todo}/>))}
    </div>
    );
};

export {Todos};