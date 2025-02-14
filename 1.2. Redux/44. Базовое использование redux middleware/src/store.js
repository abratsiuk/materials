import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "RESET": {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const myLogger = (store) => (next) => (action) => {
  console.log("dispatched an action", action.type);
  next(action);
  console.log("updated state is", store.getState());
};

export const store = createStore(counter, applyMiddleware(...middleware));

// actions
export const increment = { type: "INCREMENT" };
export const decrement = { type: "DECREMENT" };
export const reset = { type: "RESET" };
