export const convertPriceStringToNumber = (value) => Number(value.replace(/[^\d,]/g, ''))
