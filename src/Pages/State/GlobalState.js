import React ,{createContext , useContext, useReducer} from 'react'

const initialState = {
    basket: []
}
const creationContext = createContext(initialState);

const contextProvider = ({initialState, children, reducer }) => {
    return(
        <creationContext.Provider value={useReducer(reducer, initialState)}>
              {children}
        </creationContext.Provider>
    );
}
export default contextProvider;

const useStateValue =  useContext(creationContext)