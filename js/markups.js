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

export const renderCurrencyItem = ({code, baseCode, rate = 1}) => {
  return `<div class="currency-item currency-current">
                            <div class="currency-titles">
                              <div class="currency-title">USD</div>
                              <div class="currency-full">American dollar</div>
                            </div>
                            <div class="currency-amount">1.00</div>
                            <div class="currency-action">
                              <button class="currency-change currency-button">
                                 Change
                              </button>
                            </div>
                          </div>`
}