import { fetchCodes } from ".";
import { handleChange } from "./convert";
import variables from "./variables";

const { amountInput, form } = variables;

fetchCodes();
amountInput.addEventListener('keyup', handleInput);
form.addEventListener("submit", handleSubmit);