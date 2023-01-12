export const dataType = [
    {
        id: "min",
        bool: true,
        number: null
    },
    {
        id: "maj",
        bool: true,
        number: null
    },
    {
        id: "number",
        bool: true,
        number: null
    },
    {
        id: "charSpe",
        bool: true,
        number: 2
    },
    {
        id: "charSpeHard",
        bool: false,
        number: 0
    }
]

// const index = () => {

// const test = genereratePassword(10, dataType)
// console.log(test) 
// }

export const genereratePassword = (nbChar = 10, data = []) => {
    

    const array = []
    for (let i = 0; i < 3; i++) {
        let difNbChar = nbChar
        let initPassWord = ''
        for (let p = 0; p < data.length; p++) {
            if (data[p].bool) {
                const charData = filterTypeCharacter(data[p].id, difNbChar, data[p].number)

                if (charData) {
                    difNbChar = charData.difNbChar
                    initPassWord = initPassWord + charData.value
                }
            }
        }

        array.push({ id: i, password: randomChar(nbChar, initPassWord) })
    
    }
    
    return array

}


const filterTypeCharacter = (type, difNbChar, numberOfType) => {
    const charMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charMin = "abcdefghijklmnopqrstuvwxyz"
    const number = '0123456789'
    const charSpe = "@#$%*!?"
    const charSpeHard = "{}[]()/'\"`~,;:.<>-_" 

    switch (type) {
        case 'maj':
            return getCharSpe(charMaj, difNbChar, numberOfType)
        case 'min':
            return getCharSpe(charMin, difNbChar, numberOfType)
        case 'number':
            return getCharSpe(number, difNbChar, numberOfType)
        case 'charSpe':
            return getCharSpe(charSpe, difNbChar, numberOfType)
        case 'charSpeHard':
            return getCharSpe(charSpeHard, difNbChar, numberOfType)
        default:
            return getCharSpe(charMin, difNbChar, numberOfType)
    }
}

const getCharSpe = (data, difNbChar, nbCharType) => {
    if (nbCharType === null) nbCharType = Math.floor(difNbChar / 4)
    difNbChar = difNbChar - nbCharType

    const result = randomChar(nbCharType, data)

    const res = {
        difNbChar: nbCharType,
        value: result
    }
    return res
}

const randomChar = (length, characters) => {
    let result = '';

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}