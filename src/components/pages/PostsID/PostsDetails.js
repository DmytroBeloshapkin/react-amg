import {useLocation} from "react-router-dom";

const PostsDetails = () => {

    let location = useLocation()
    console.log(location.state);
    let {state: post} = location

    return (
    <div>
        {JSON.stringify(post)}
    </div>
    );
};

export {PostsDetails};
