import Simpson from "./Simpson";
import {simpsonsUser} from "./simpsonsUser";


export default function Simpsons() {
    return (
        <div className='container'>
            {
                simpsonsUser.map((user, index) =>
                    (<Simpson key={index} item={user} />))
            }
        </div>
    )
}