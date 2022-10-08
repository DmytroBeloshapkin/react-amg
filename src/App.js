import {Users} from "./components";
import {UserChoser} from "./components/userChoser/UserChoser";

const App = () => {
    return (
    <div>
            <UserChoser/>
        <hr/>
            <Users/>
    </div>
    );
};

export {App};