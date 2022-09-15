import './style.css'

export default function User(props) {

    let {item: user} = props

    return <div className="userRick">
        <h3>{user.id}. {user.name}</h3>
        <p>{user.status}</p>
        <p>{user.species}</p>
        <p>{user.gender}</p>
        <img src={user.image} alt={user.name}/>
    </div>
}