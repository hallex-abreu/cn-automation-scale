export function getQuantityDaysOnMonth(month,year) {
    return new Date(year, month, 0).getDate();
}