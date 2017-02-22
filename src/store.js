import {createStore} from 'redux';

import reducerCombiner from './reducers/index';

export default createStore(reducerCombiner);
