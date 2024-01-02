const initialState = {
    username: '',
    email: '',
    // Add other user details as needed
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_DETAILS':
        return {
          ...state,
          ...action.payload,
        };
      // Add more cases for other user-related actions if needed
      default:
        return state;
    }
  };
  
  export default userReducer;
  