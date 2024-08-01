import state from "./state.js";
import {getFullTitle} from "./utils.js"

export const renderResult = ({ code, amount, full }) => {
  return `<div class="form-result__item-icon icon">
            <img src="./images/arrow.svg" alt="" />
          </div>

          <div class="form-result__item-titles">
            <div class="form-result__item-title">${code}</div>
            <div class="form-result__item-full">
              ${full}
            </div>
          </div>

          <div class="form-result__item-value">${amount.toFixed(2)}</div>`;
};

export const renderCurrencyItem = ({ code, baseCode, rate = 1 }) => {
  const isBase = code == baseCode;
  const full = getFullTitle(state.codes, code);
  return `<div class="currency-item ${isBase ? "currency-current" : ""}">
                            <div class="currency-titles">
                              <div class="currency-title">${code}</div>
                              <div class="currency-full">${full}</div>
                            </div>
                            <div class="currency-amount">1.00</div>
                            <div class="currency-action">
                              <button class="currency-change currency-button">
                                 Change
                              </button>
                            </div>
                          </div>`
}