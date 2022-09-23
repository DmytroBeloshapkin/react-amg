const User = (props) => {

    let {name, age} = props

    return (
    <div>
        <h4>{name}тест</h4>
        <p>{age}тест2</p>
    </div>
    );
};

export {User};