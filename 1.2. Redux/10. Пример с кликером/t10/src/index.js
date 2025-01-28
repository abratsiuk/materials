import { createStore } from "redux";

const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  return state;
};

const store = createStore(counter);

const increment = {
  type: "INCREMENT"
};

const count = document.createElement("div");
count.innerText = store.getState();
count.id = "count";
document.body.append(count);

const decBtn = document.createElement("button");
decBtn.innerText = "-";
document.body.append(decBtn);

const incBtn = document.createElement("button");
incBtn.innerText = "+";
incBtn.onclick = () => store.dispatch(increment);
document.body.append(incBtn);

const resetBtn = document.createElement("button");
resetBtn.innerText = "reset";
document.body.append(resetBtn);

const render = () => {
  document.getElementById("count").innerText = store.getState();
};

store.subscribe(render);
