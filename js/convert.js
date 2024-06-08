import state from "./state.js";

export const handleChange = ({ target: { value, name } }) => {
    state.pair = {
        ...state.pair,
        [name]: value,   
    };
};

export const handleInput = ({ target: { value, name } }) => {
    state[name] = Number(value);
};

export const handleSubmit = (e) => {
    e?.preventDefault();
}

