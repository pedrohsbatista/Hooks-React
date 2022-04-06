function numberToAdd(n){  
    var result = parseInt(n)    
    return Number.isNaN(result) ? 0 : result
}

export function numberReducer(state, action) {    
    switch(action.type) {
        case 'numberAdd2': return {...state, number: state.number + 2}        
        case 'multiplyBy7': return {...state, number: state.number * 7}
        case 'divideBy25': return {...state, number: state.number / 25}
        case 'roundNumber': return {...state, number: parseInt(state.number) }
        case 'setNumberToAdd': return {...state, numberToAdd: numberToAdd(action.payload)}
        case 'sum': return {...state, number: state.number + state.numberToAdd}        
        default: return state
    }
}
