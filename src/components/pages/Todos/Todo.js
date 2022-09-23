export default function Todo(props) {

    const {todo} = props;

    return (
        <div>
            <p>userId: {todo.userId}</p>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>completed: {todo.completed}</p>
            <hr/>
        </div>
    );
}