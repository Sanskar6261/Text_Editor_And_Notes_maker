import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import AppReducer from './AppReducer'
const initialState={
    notes:[
       {
        id: uuidv4(),
        title: "Untitiled note",
        body: "",
        lastdateM: new Date().toLocaleDateString() + "- " + new Date().getHours() + ":" + new Date().getMinutes(),
        favorite: false,
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