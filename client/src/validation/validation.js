export const brand = (value) => {

    if (value === '') {
        return { message: 'Brand is required', error: true }
    } else {
        return { message: '', error: false }
    }

}
export const price = (value) => {

    if (value === '') {
        return { message: 'Price is required', error: true }
    } else if (value < 0) {
        return { message: 'Price must be a positive number ', error: true }
    }
    else {
        return { message: '', error: false }
    }

}
export const year = (value) => {

    if (value === '') {
        return { message: 'Year is required', error: true }
    } else if (value < 1900) {
        return { message: 'Year must be greater than 1899 ', error: true }
    } else if (value > 2021) {
        return { message: 'Year must be less than 2022 ', error: true }
    }
    else {
        return { message: '', error: false }
    }
}

export const category = (value) => {

    if (value === '' || value === 'Choose category') {
        return { message: 'Category is required', error: true }
    }
    else {
        return { message: '', error: false }
    }

}

export const mileage = (value) => {

    if (value === '') {
        return { message: 'Mileage is required', error: true }
    } else if (value < 0) {
        return { message: 'Mileage must be a positive number or 0', error: true }
    }
    else {
        return { message: '', error: false }
    }

}
export const horsePower = (value) => {

    if (value === '') {
        return { message: 'Horse power is required', error: true }
    } else if (value < 0) {
        return { message: 'Mileage must be a positive number', error: true }
    }
    else {
        return { message: '', error: false }
    }
}

export const fuel = (value) => {

    if (value === '' || value === 'Choose fuel') {
        return { message: 'Fuel is required', error: true }
    }
    else {
        return { message: '', error: false }
    }
}
export const color = (value) => {
    value = Number(value)
    if (value === '') {
        return { message: 'Color is required', error: true }
    } else if (!(isNaN(value))) {
        return { message: 'The color should be a string', error: true }
    }
    else {
        return { message: '', error: false }
    }

}

export const gearbox = (value) => {

    if (value === '' || value === 'Choose gearbox') {
        return { message: 'Gearbox is required', error: true }
    }
    else {
        return { message: '', error: false }
    }
}
export const extras = (value) => {
    if (value === '') {
        return { message: 'Extras is required', error: true }
    } else if (!(isNaN(value))) {
        return { message: 'The extras should be a string', error: true }
    } else if (value.length < 10) {
        return { message: 'Extras must be 10 characters or more', error: true }
    }
    else {
        return { message: '', error: false }
    }
}

export const description = (value) => {
    if (value === '') {
        return { message: 'Description is required', error: true }
    } else if (!(isNaN(value))) {
        return { message: 'The description should be a string', error: true }
    } else if (value.length < 15) {
        return { message: 'Description must be 15 characters or more', error: true }
    }
    else {
        return { message: '', error: false }
    }
}
export const location = (value) => {
    if (value === '') {
        return { message: 'Location is required', error: true }
    } else if (!(isNaN(value))) {
        return { message: 'The location should be a string', error: true }
    } else {
        return { message: '', error: false }
    }
}

export const contactNumber = (value) => {

    if (value === '') {
        return { message: 'Contact number is required', error: true }
    } else {
        return { message: '', error: false }
    }
}
export const image = (value) => {

    if (value === '') {
        return { message: 'Contact number is required', error: true }
    } else if (!/^https?:\/\//.test(value)) {
        return { message: 'Invalid image url. Should start with http:// or https:// ', error: true }
    } else {
        return { message: '', error: false }
    }
}
