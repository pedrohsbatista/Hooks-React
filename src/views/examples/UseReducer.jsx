import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0,
    numberToAdd: 0, 
}

function numberToAdd(n){
    var result = parseInt(n)
    return Number.isNaN(result) ? 0 : result
 }

//adicionar n
function reducer(state, action) {
    console.log(state);
    switch(action.type) {
        case 'numberAdd2': return {...state, number: state.number + 2}
        case 'login': return {...state, user: { name: action.payload }}
        case 'multiplyBy7': return {...state, number: state.number * 7}
        case 'divideBy25': return {...state, number: state.number / 25}
        case 'roundNumber': return {...state, number: parseInt(state.number) }
        case 'setNumberToAdd': return {...state, numberToAdd: numberToAdd(action.payload)}
        case 'sum': return {...state, number: state.number + state.numberToAdd}        
        default: return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                 <span className="text">{state.user.name}</span> :
                 <span className="text">Sem usuário</span>
                }
                
                <span className="text">{state.number}</span>                
                <div>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Pedro'})}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'multiplyBy7'})}>*7</button>
                    <button className="btn" onClick={() => dispatch({type: 'divideBy25'})}>/25</button>
                    <button className="btn" onClick={() => dispatch({type: 'roundNumber'})}>Arredondar</button>
                    <input type="text" className="input" value={state.numberToAdd} onChange={e => dispatch({type: 'setNumberToAdd', payload: e.target.value})}/>
                    <button className="btn" onClick={() => dispatch({type: 'sum'})}>Sum</button>
                </div>                
            </div>
        </div>      
    )
}

export default UseReducer
