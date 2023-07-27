"use client"
import React, { useReducer, useState } from 'react';
const textContext = React.createContext();

export function ContextProvider(props) {
    // const [section, setSection] = useState('');

    let view = '';
    const reducer = (state, action) => {
        switch (action.type) {
            case 'stackclick':
                view = "stackscroll"
                return view;
            case 'homeclick':
                view = "heroscroll"
                return view;
            case 'projectclick':
                view = "projectscroll"
                return view;
            case 'aboutclick':
                view = "aboutscroll"
                return view;
            case 'contactclick':
                view = "contactscroll"
                return view;
            case 'hidenav':
                view = "hidenav"
                return view;
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