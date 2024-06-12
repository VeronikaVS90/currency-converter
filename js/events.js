import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes } from ".";
import variables from "./variables";

const { amountInput, form, switchButton } = variables;

fetchCodes();
amountInput.addEventListener('keyup', handleInput);
form.addEventListener("submit", handleSubmit);
switchButton.addEventListener("click", switchCurrencies);