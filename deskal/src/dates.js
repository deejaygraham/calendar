export const getDayOfWeek = (date) => {
    return new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(date);
};

export const getDayOfMonth = (date) => {
    console.log(date.getDate());
    return date.getDate();
};

export const addDays = (date, days) => {
    const newDate = new Date(date);

    newDate.setDate(date.getDate() + days);

    return newDate;
}

export const addMOnths = (date, months) => {
    const newDate = new Date(date);

    newDate.setMonth(date.getMonth() + months);

    return newDate;
}