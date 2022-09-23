import {useEffect, useState} from "react";

import {pageService} from "../../../service";
import Comment from "./Comment";
import {useLocation} from "react-router-dom";


const Comments = () => {

    let location = useLocation()
    console.log(location.state);


let [comments, setComments] = useState([])

useEffect(() => {
    pageService.getComments().then(value => setComments(value.data))
}, []);

return (
    <div>
        {comments.map((comment, index) => (<Comment key={index} comment={comment}/>))}
    </div>
);
};

export {Comments};