

export const requiredFields = (value) => {
    if (value) {
        return undefined;
    } else {
        return 'Field is required'
    }       
}

export const maxLengthThunkCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) {
            return (`Ooops, max length is ${maxLength} symbols :(`);
        }
    }
}

export const minLengthThunkCreator = (minLength) => {
    return (value) => {
        if(value && value.length < minLength) {
            return('You must to throw symbols!')
        }
    }
}