import dayjs from "dayjs"

export function getDaysOnMonth(quantityDaysMoth, monthDays){
    const date = new Date()
    for(let i = 1; i <= quantityDaysMoth; i++){
        let newDate = new Date(date.getFullYear(),date.getMonth(), i);
        if(newDate.getDay() == 0){
            monthDays.push({
                day: 0,
                date: `*Domingo - ${dayjs(newDate).format('DD/MM')}*`
            });
        }
        if(newDate.getDay() == 4){
            monthDays.push({
                day: 4,
                date: `*Quinta - ${dayjs(newDate).format('DD/MM')}*`
            });
        }
    }

    return monthDays
}