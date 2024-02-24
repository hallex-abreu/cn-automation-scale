import volunteers from "./volunteers.js"
import { getQuantityDaysOnMonth } from "./services/get-quantity-days-on-month.js"
import { getDaysOnMonth } from "./services/get-days-on-month.js"
import { randomVolunteers } from "./services/random-volunteers.js"
import { getVolunteersOfDay } from "./services/get-volunteers-of-day.js"

let monthDays = []
let volunteersRandom = randomVolunteers(volunteers)

const date = new Date()
const quantityDaysMoth = getQuantityDaysOnMonth(date.getMonth() + 1, date.getFullYear())
let schedule = `*Escala do mês de ${date.toLocaleString('pt-BR', { month: 'long' })}*\n*(Não esqueçam de confirmar)*\n`;

let daysOnMonth = getDaysOnMonth(quantityDaysMoth, monthDays)

for(let dayMonth of daysOnMonth){
    if(dayMonth.day === 4){
        //Thursday Night
        execute(4, dayMonth.date)
    }

    if(dayMonth.day === 0){
        //Sunday Morning
        execute(1, dayMonth.date)
        //Sunday Evening
        execute(2, dayMonth.date)
        //Sunday Night
        execute(3, dayMonth.date)
    }
}

function execute(day, date){
    let peoples = []
    let resultGetVolunteersOfDay = getVolunteersOfDay(day, volunteersRandom)

    peoples = resultGetVolunteersOfDay.peoples
    volunteersRandom = resultGetVolunteersOfDay.volunteersRandom

    if(peoples.length === 1){
        let resultGetVolunteersOfDay = getVolunteersOfDay(day, volunteersRandom, true)
        peoples.push(resultGetVolunteersOfDay.peoples[0])
        volunteersRandom = resultGetVolunteersOfDay.volunteersRandom
    }

    switch(day){
        case 1:
            schedule = schedule+`\n${date} *(10HRS)*\n${peoples.map(people => `- ${people.name}\n`).join('')}`
            break
        case 2:
            schedule = schedule+`\n${date} *(17HRS)*\n${peoples.map(people => `- ${people.name}\n`).join('')}`
            break
        case 3:
            schedule = schedule+`\n${date} *(19:30HRS)*\n${peoples.map(people => `- ${people.name}\n`).join('')}`
            break
        case 4:
            schedule = schedule+`\n${date} *(19:30HRS)*\n${peoples.map(people => `- ${people.name}\n`).join('')}`
            break
    }

}

console.log(schedule)