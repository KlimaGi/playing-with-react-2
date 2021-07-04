import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "32231",
      description: "rent",
      note: "final for this adress",
      amaount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
