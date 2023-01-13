export const genereratePassword = (nbChar = 8, data = []) => {
    const array = []
    let difNbChar = nbChar
        let initPassWord = ''
    for (let i = 0; i < 3; i++) {
        const nbTrue = data.filter(x => x.bool && x.id !== 'charSpe' && x.id !== 'charSpeHard')
        const nbCharSpeTrue = data.filter(x => x.bool && (x.id === 'charSpe' || x.id === 'charSpeHard'))
        let initialValue = 0
        const sum = nbCharSpeTrue?.reduce((acc, current) =>
             acc + current.number, initialValue  
        )
        const nbWithoutSpe = difNbChar - sum
        const difOther = Math.floor(nbWithoutSpe / nbTrue.length)
        for (let p = 0; p < data.length; p++) {
            if (data[p].bool) {
                const charData = filterTypeCharacter(data[p].id, difNbChar, data[p].number, difOther)
                if (charData) {
                    difNbChar = charData.difNbChar
                    initPassWord = initPassWord + charData.value
                }
            }
        }

        array.push({ id: i, password: mixChar(initPassWord) })
    }
    return array
}

const filterTypeCharacter = (type, difNbChar, numberOfType, nbTrue) => {
    const charMaj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const charMin = "abcdefghijklmnopqrstuvwxyz"
    const number = '0123456789'
    const charSpe = "@#$%*!?"
    const charSpeHard = "{}[]()/'\"`~,;:.<>-_" 
    switch (type) {
        case 'maj':
            return getCharSpe("maj", charMaj, difNbChar, numberOfType, nbTrue)
        case 'min':
            return getCharSpe("min", charMin, difNbChar, numberOfType, nbTrue)
        case 'number':
            return getCharSpe("number", number, difNbChar, numberOfType, nbTrue)
        case 'charSpe':
            return getCharSpe("charSpe", charSpe, difNbChar, numberOfType, nbTrue)
        case 'charSpeHard':
            return getCharSpe("charSpeHard", charSpeHard, difNbChar, numberOfType, nbTrue)
        default:
            return getCharSpe(charMin, difNbChar, numberOfType, nbTrue)
    }
}

const getCharSpe = (type, data, difNbChar, nbCharType, nbTrue) => {
    let newDifNbChar = ''

    if (type === "charSpe" || type === "charSpeHard") {
        newDifNbChar = difNbChar - nbCharType

        const result = randomChar(nbCharType, data)
        const res = {
            difNbChar: newDifNbChar,
            value: result
        }
        return res
    } else {
        newDifNbChar = difNbChar - nbTrue
        if (newDifNbChar < nbTrue) {
            const result = randomChar(nbTrue + newDifNbChar, data)

            const res = {
                difNbChar: newDifNbChar,
                value: result
            }
            return res
        } else {
           const result = randomChar(nbTrue, data) 

           const res = {
            difNbChar: newDifNbChar,
            value: result
            }
            return res
        }
    }
   
}

const randomChar = (length, characters) => {
    let result = '';

    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}

const mixChar = (char) => {
    const array = char.split("")
    const shuffle = array.sort(() => Math.random() - 0.5)
    return shuffle.join('')
}