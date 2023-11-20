var initialState = { count: 0 }

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + action.payload,
        // count: num1 + num2,
      }
    case "decrement":
      return {
        count: state.count - action.payload,
      }
    case "multi":
      return {
        count: state.count * action.payload,
      }
    case "divide":
      return {
        count: state.count / action.payload,
      }
    default:
      return state
  }
}
export default reducer
