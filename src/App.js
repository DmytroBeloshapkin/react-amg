import {Routes, Route, Link} from "react-router-dom";

import {Albubs, Comments, Home, Posts, Todos, PostsDetails, Users} from "./components";
import css from './App.module.css'


const App = () => {
    return (
        <div>

            <div className={css.topHeader}>
                <h2>Jsonplaceholder viewer</h2>
                <h3>lesson 4</h3>
            </div>
            <div className={css.header}>
                <button className={css.button}><Link to={'/'}>Home pages</Link></button>
                <button className={css.button}><Link to={'/todos'}>todos</Link></button>
                <button className={css.button}><Link to={'/albums'}>albums</Link></button>
                <button className={css.button}><Link to={'/comments'}>comments</Link></button>
                <button className={css.button}><Link to={'/users'}>users</Link></button>
                <button className={css.button}><Link to={'/posts'}>all posts</Link></button>

            </div>

            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albubs/>}/>
                <Route path={'comments'} element={<Comments/>}/>
                <Route path={'comments/:id'} element={<PostsDetails/>}/>

                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
            </Routes>

        </div>
    )
}


export {App};
