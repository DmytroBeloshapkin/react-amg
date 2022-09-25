import css from './todo.module.css'

export default function Todo(props) {

    const {todo} = props;

    return (
        <div className={css.todo}>
            <h3>userId: {todo.userId}</h3>
            <h3>id: {todo.id}</h3>
            <h3>title: {todo.title}</h3>
            <p>completed: {todo.completed.toString()}</p>
        </div>
    );
}