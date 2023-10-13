// reducers.js

const initialState = {
    allTodos: [],
    completedTodos: [],
    isCompletedScreen: false,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          allTodos: [...state.allTodos, action.payload],
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          allTodos: state.allTodos.filter((_, index) => index !== action.payload),
        };
  
      case 'COMPLETE_TODO':
        const completedTodo = state.allTodos[action.payload];
        return {
          ...state,
          allTodos: state.allTodos.filter((_, index) => index !== action.payload),
          completedTodos: [...state.completedTodos, { ...completedTodo, completedOn: new Date() }],
        };

        // reducers.js

case 'DELETE_COMPLETED_TODO':
    const reducedCompletedTodos = [...state.completedTodos];
    reducedCompletedTodos.splice(action.payload, 1);
    return {
      ...state,
      completedTodos: reducedCompletedTodos,
    };
  
  
      case 'TOGGLE_COMPLETED_SCREEN':
        return {
          ...state,
          isCompletedScreen: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  