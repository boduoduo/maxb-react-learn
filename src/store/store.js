import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas'

const sagaMiddleware = createSagaMiddleware();   //创建saga中间件
// 利用compose创造一个增强函数，就相当于建立了一个链式函数，
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(reducer, enhancer)
sagaMiddleware.run(mySagas)

export default store