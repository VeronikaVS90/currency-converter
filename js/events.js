import { handleInput, handleSubmit, switchCurrencies } from "./convert.js";
import { fetchCodes } from "./index.js";
import variables from "./variables";

const { amountInput, form, switchButton, tabs } = variables;

fetchCodes();
amountInput.addEventListener('keyup', handleInput);
form.addEventListener("submit", handleSubmit);
switchButton.addEventListener("click", switchCurrencies);
tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));