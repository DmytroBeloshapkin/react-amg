import css from './Home.module.css'

const Home = () => {
    return (
        <div>

            <div className={css.namePage}>Home pages</div>

            <div>
                <div><b>Todos from</b> https://jsonplaceholder.typicode.com/todos</div>
                <div><b>Albums from</b> https://jsonplaceholder.typicode.com/albums</div>
                <div><b>Comments from</b> https://jsonplaceholder.typicode.com/comments</div>
                <div><b>Users from</b> https://jsonplaceholder.typicode.com/users</div>
                <div><b>All posts from</b> https://jsonplaceholder.typicode.com/posts</div>
            </div>
        </div>
    );
};

export {Home};