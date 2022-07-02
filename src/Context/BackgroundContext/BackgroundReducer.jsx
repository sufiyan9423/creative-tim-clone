const BackgroundReducer = (state, action) => {
    switch (action.type) {
      case "blue": {
        return {
            background: "blue",
          };
      }
      case "yellow": {
        return {
            background: "yellow",
          };
      }
      case "green": {
        return {
            background: "green",
          };
      }
      case "orange": {
        return {
            background: "orange",
          };
      }
      case "red": {
        return {
            background: "red",
          };
      }
      default:
        return state;
    }
  };
  
  export default BackgroundReducer;
 