const Car = (props) => {

    let {item: car, lift} = props;

    return (
        <div>
            <h5>id:{car.id} - {car.model}</h5>
            <p>{car.price}</p>
            <p>{car.year}</p>

            <button onClick={()=>{
                lift(car)
            }}>details</button>
            <hr/>

        </div>
    );
};

export {Car};