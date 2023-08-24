import { getDateDifference } from "./getAge";
import { divDays, divMessage, divMonths, divYears, inputBornDate } from "./htmlElements";

export const tryCalculateAge = () => {
    try {
        const dateDifference = getDateDifference(inputBornDate.value);
        divYears.innerText = dateDifference.years;
        divMonths.innerText = dateDifference.months;
        divDays.innerText = dateDifference.days;
        showMessageError(divMessage)
    } catch (error) {
        showMessageError(divMessage, error.message)
    }
}

export const showMessageError = (element, message = 'no-error') => {
    if (message !== 'no-error') {
        element.style.display = 'block'
        element.innerText = message;
    } else {
        element.style.display = 'none'
    }
}