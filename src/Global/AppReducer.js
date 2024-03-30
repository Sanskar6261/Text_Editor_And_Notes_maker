export default (state,action)=>{
    switch(action.type)
    {
        case 'ADD_NOTE':
            return{
                ...state,
                notes:[action.payload,...state.notes]
            }
        case 'DELETE_NOTE':
            return{
              ...state,
                notes:state.notes.filter(notes=>notes.id!=action.payload) 
            }
        default:
            return state;
    }
}