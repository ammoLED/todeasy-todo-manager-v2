interface Params<T> {
    filterField: keyof T
    array: T
    equalsTo: string | number | boolean
}

const getElementFromArray = <T extends []>({ filterField, equalsTo, array}: Params<T>) => {
    return array.filter(item => item[filterField] === equalsTo)
}

export default getElementFromArray