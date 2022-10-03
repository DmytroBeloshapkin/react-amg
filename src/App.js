import {Animals} from "./components";
import {Form} from "./components";
import {useAnimals} from "./components";
import css from './App.module.css'

function App() {
    const [state, dispatch] = useAnimals();

return (


        <div className={css.header}>
            <div>
                <Form title={'Cat'} type={'addCat'} dispatch={dispatch}/>
                <Animals animals={state.cats} type={'deleteCat'} dispatch={dispatch}/>
            </div>

            <div>
                <Form title={'Dog'} type={'addDog'} dispatch={dispatch}/>
                <Animals animals={state.dogs} type={'deleteDog'} dispatch={dispatch}/>
            </div>

    </div>);
}

export default App