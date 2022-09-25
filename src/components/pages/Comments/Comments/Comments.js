import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {pageService} from "../../../../service";
import Comment from "../Comment/Comment";
import css from './Comments.module.css'


const Comments = () => {

    let location = useLocation()
    console.log(location.state);


    let [comments, setComments] = useState([])

    useEffect(() => {
        pageService.getComments().then(value => setComments(value.data))
    }, []);

    return (
        <div>
            <div className={css.namePage}>Comments page</div>
            <div className={css.Comments}>
                {comments.map((comment, index) => (<Comment key={index} comment={comment}/>))}
            </div>
        </div>
    );
};

export {Comments};