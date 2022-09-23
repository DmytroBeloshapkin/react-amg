import {Routes, Route, Link} from "react-router-dom";
import {Albubs, Comments, Home, Posts, Todos} from "./components";
import {Users} from "./components/pages/Users";
import {PostsDetails} from "./components/pages/PostsID/PostsDetails";


const App = () => {
    return (
    <div>
        <h2>Jsonplaceholder viewer</h2>
        <h3>lesson 4</h3>
        <div>
            <div><Link to = {'/'}>Home pages</Link></div>
            <div><Link to = {'/todos'}>todos</Link></div>
            <div><Link to = {'/albums'}>albums</Link></div>
            <div><Link to = {'/comments'}>coments</Link></div>
            <div><Link to = {'/users'}>users</Link></div>
            <div><Link to = {'/posts'}>all posts</Link></div>

        </div>
        <hr/>
        <Routes>
            <Route index element = {<Home/>}/>
            <Route path={'/'} element = {<Home/>}/>
            <Route path={'todos'} element = {<Todos/>}/>
            <Route path={'albums'} element = {<Albubs/>}/>
            <Route path={'comments'} element = {<Comments/>}/>
            <Route path={'users'} element = {<Users/>}/>
            <Route path={'posts'} element = {<Posts/>}/>
            <Route path={'comments?postId/:id'} element = {<PostsDetails/>}/>
        </Routes>
    </div>
)
}

export default App





//      comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//      при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//      id поста взяти з коментаря (postId)
