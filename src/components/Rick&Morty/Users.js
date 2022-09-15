import {usersRick} from "./usersRick";
import User from "./User";

export default function Rick() {
    return (
        <div className="container2">
            {
                usersRick.results.map(user => (<User item={user} key={user.id}/>))
            }
        </div>
    )
}