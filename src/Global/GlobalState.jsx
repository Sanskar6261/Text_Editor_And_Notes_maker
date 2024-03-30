import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from './AppReducer'
const initialState={
    notes:[
       {
        title:"Untitile",
        body:"abcd",
        date:21/23/20-12/25
       }
    ]
}
export const GlobalContext=createContext(initialState);
export const GlobalProvider =({children})=>{
 
    const[state,dispatch]=useReducer(AppReducer,initialState);
    function deleteNote(id){
        dispatch({
            type:'DELETE_NOTE',
            payload:id
        })
    }
    function addNote(note){
        dispatch({
            type:'ADD_NOTE',
            payload:note
        })
    }


    return(<GlobalProvider value={{notes:state.notes,deleteNote,addNote}}>
        {children}
    </GlobalProvider>);
}