import {useEffect, useState} from "react";

import {pageService} from "../../../../service";
import Todo from "../Todo/Todo";
import css from './todos.module.css'


const Todos = () => {

    let [todos, setTodos] = useState([])

    useEffect(() => {
        pageService.getTodos().then(value => setTodos(value.data))
    }, []);

    return (
        <div>
            <div className={css.namePage}>Todos page</div>
            <div className={css.todos}>
                {todos.map((todo, index) => (<Todo key={index} todo={todo}/>))}
            </div>
        </div>
    );
};

export {Todos};