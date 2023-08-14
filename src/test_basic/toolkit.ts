import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        incremented: (state) => {
            state.value++;
        },
        decremented: (state) => {
            state.value--;
        },
    },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(incremented());
store.dispatch(incremented());
store.dispatch(decremented());
