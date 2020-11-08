const initialState: any = [];

const usersReducer = (state = initialState, action: string) => {
  if (action === '') {
    return state;
  }
  return state;
};

export default usersReducer;
