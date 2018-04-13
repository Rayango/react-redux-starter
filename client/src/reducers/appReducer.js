export default function appReducer(state = {
  text: false
}, action) {
  switch (action.type) {
    case 'TOGGLE_TEXT': 
      return {
        ...state,
        text: action.payload
      }
    default:
      return state;  
  };
}