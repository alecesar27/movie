import { legacy_createStore as createStore } from 'redux'
import { reducers } from './reducers';


export const store = createStore(
    reducers,
    //configura o chrome para poder usar a redux dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


