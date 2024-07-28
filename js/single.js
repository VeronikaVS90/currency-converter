import variables from "./variables.js";

const {success}  = variables
export const fetchLatest = async () => {
    const { url, currency: { code } } = state;

    if (!code) return;

    try {
        const response = await fetch(`${url}/latest/${code}`)
        const data = await response.json();

        if (data.result === success) {
            state.currency = {...state.currency, ...data}
        }
    } catch (err) {
        console.log(err);
    }
}