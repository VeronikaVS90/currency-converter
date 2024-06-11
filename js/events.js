import { handleInput, handleSubmit } from "./convert.js";
import { fetchCodes } from ".";
import variables from "./variables";

const { amountInput, form } = variables;

fetchCodes();
amountInput.addEventListener('keyup', handleInput);
form.addEventListener("submit", handleSubmit);