"use client"
import React, { useReducer, useState } from 'react';
const textContext = React.createContext();

export function ContextProvider(props) {
    // const [section, setSection] = useState('');

    let view = '';
    const reducer = (state, action) => {
        switch (action.type) {
            case 'stackclick':
                return view = "stackscroll"
            case 'homeclick':
               return view = "heroscroll"
            case 'projectclick':
               return view = "projectscroll"
            case 'aboutclick':
               return view = "aboutscroll"
            case 'contactclick':
               return view = "contactscroll"
            case 'hidenav':
               return view = "hidenav"
            default:
                return state;
        }
    }
    const [click, dispatch] = useReducer(reducer, []);

    // const clicked = () => {
    //     setSection('stackscroll')
    // }

    return (
        <textContext.Provider value={{ click, dispatch }}>
            {props.children}
        </textContext.Provider>
    )
}

export default textContext;
