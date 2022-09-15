import './style.css'

export default function Simpson(props) {

    let {item: user} = props;

    return (
        <div className="userSimpson">
            <h3>{user.name} {user.surname}</h3>
            <p>age: {user.age}</p>
            <p>{user.info}</p>
            <img src={user.photo} alt={user.name}/>
        </div>
    )

}