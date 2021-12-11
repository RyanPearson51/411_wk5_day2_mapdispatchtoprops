export const addCar = (car) => ({
    type: 'ADD_CAR',
    value: car
})

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}