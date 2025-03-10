export const flattenArray = (array: any[]): any[] => {
    return array.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item)
    }, [])
}