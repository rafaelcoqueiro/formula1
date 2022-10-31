import React, { createContext, useReducer } from "react";
import corrida from "../data/corrida";

const initialState = { corrida }
const PilotoContext = createContext({})

export const PilotosProvider = props => {
    
    const actions = {
        updatePilot(state, action) {
            const updated  = action.payload;
            return {
                ...state,
                corrida: corrida.map(u => u.id_piloto === updated.id_piloto ? updated : u)
            }
        }
    }

    function reducer(state, action) {
        const fn = actions[actions.type];
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PilotoContext.Provider value={{ state, dispatch }}>
            { props.children }
        </PilotoContext.Provider>
    )
}

export default PilotoContext