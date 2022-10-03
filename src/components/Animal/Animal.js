import css from './Animal.module.css'

const Animal = (props) => {

    const {type, dispatch, animal} = props;

    return (
        <div className={css.Animal}>
            <div>ID: {animal.id} <br/> Name: {animal.name}</div>

            <button onClick={() => dispatch({type, payload: animal.id})}>Delete</button>
        </div>
    );
};

export {Animal};