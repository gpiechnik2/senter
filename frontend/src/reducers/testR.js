const testR = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return state;

    default:
      return state;
  }
};
export default testR;
