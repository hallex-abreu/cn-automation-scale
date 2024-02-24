export function getVolunteersOfDay(day, volunteersRandom, onlyOneVolunteers = false){
    let peoples = []
    const voluntersOfDay = volunteersRandom.filter(volunteer => volunteer.days.includes(day)).sort((a, b) => a.quantity - b.quantity)[0]

    const index = volunteersRandom.findIndex(volunteer => volunteer.id === voluntersOfDay.id)
    volunteersRandom[index].quantity = volunteersRandom[index].quantity + 1

    if(onlyOneVolunteers){
        peoples.push(voluntersOfDay.peoples[0])
    } else{
        voluntersOfDay.peoples.map(volunter => peoples.push(volunter))
    }

    return {
        peoples,
        volunteersRandom
    }
}