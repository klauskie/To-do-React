
/*
task = {
    id: <int>
    message: <string>
    completed: <bool>
}
*/

var lastID = -1

export const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            lastID += 1
            return [...state, { ...action.payload, id: lastID }]
        case "TOGGLE_TASK":
            return state.map(t => todo(t, action))
        case "COMPLETED_TASK":
            //return comp(state)
            return state.map(t => wat(t, action))
        case "All_TASKS":
                return state.map(t => all(t, action))
        default:
            throw new Error();
    }
}

const todo = (state, action) => {
    if (action.id === state.id) {
        return { ...state, completed: !state.completed }
    }
    return state
}

const wat = (state, action) => {
    if (state.completed) {
        return { ...state, hidden: false }
    }
    return { ...state, hidden: true }
}

const all = (state, action) => {
    return { ...state, hidden: false }
}

const comp = (state) => {
    state.forEach((item) => {
        if (item.completed) {
            item.hidden = true
        }
    })
    return state
}

export default reducer