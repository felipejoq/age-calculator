export const getDateDifference = (dateSelected) => {
    if (!dateSelected) {
        throw new Error('No ha seleccionado una fecha válida.');
    }

    const currentDate = new Date();
    const selectedDate = new Date(dateSelected).setHours(24);

    if (selectedDate > currentDate) {
        throw new Error('La fecha seleccionada debe ser menor a la fecha actual.');
    }

    const difference = currentDate - selectedDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    return { years, months, days };
};