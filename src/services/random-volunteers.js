export function randomVolunteers(volunteers){
    return volunteers.map((value) => ({value, sort: Math.random()}))
    .sort((a, b) => a.sort - b.sort)
    .map(({value}, index) => {
        return {
            id: index + 1,
            peoples: value.peoples,
            quantity: 0,
            days: value.days
        }
    })
}