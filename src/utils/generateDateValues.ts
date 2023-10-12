export function generateDateDropdownValues(initialMonth = 0, initialYear = new Date().getFullYear()) {
    // Generate an array of years (from current year to 100 years ago)
    const years = Array.from({ length: 101 }, (_, index) => (initialYear - index).toString());

    // Generate an object where each month name is a key and the value is an array of days
    const months:any = {};

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    monthNames.forEach((monthName, index) => {
        const daysInMonth = new Date(initialYear, index + 1, 0).getDate();
        const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) => (dayIndex + 1).toString());
        months[monthName] = daysArray;
    });

    // Return the structured data
    return {
        days: months[monthNames[initialMonth]],
        months: Object.keys(months),
        years: years,
    };
}



