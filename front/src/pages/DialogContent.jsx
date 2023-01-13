import { Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, Stack, Switch } from "@mui/material"
import { useMemo } from "react"
import { useState } from "react"



const DialogContent = (props) => {
    const { min, maj, num, speciaux, hardSpeciaux, nbOfChar, setMaj, setMin, setNum, setSpeciaux, setHardSpeciaux, setNbOfChar } = props
    const nbOfCharData = [
        {
            id: "8",
            value: 8
        },
        {
            id: "10",
            value: 10
        },
        {
            id: "12",
            value: 12
        },
        {
            id: "autres",
            value: "autres"
        },
    ]

    const [nbOfSpeciaux, setNbOfSpeciaux] = useState(1) 
    const [nbOfHardSpeciaux, setNbOfHardSpeciaux] = useState(1)
    const [nb, setNb] = useState(8)
    
    const handleOnChangeSpeciaux = () => {
        setSpeciaux({ checked: !speciaux.checked, nb: speciaux.checked === true ? 0 : nbOfSpeciaux })
    }

    const handleOnChangeNbOfSpeciaux = (e) => {
        setSpeciaux({ ...speciaux, nb: e.target.value })
        setNbOfSpeciaux(e.target.value)
    }

    const handleOnChangeHardSpeciaux = () => {
        setHardSpeciaux({ checked: !hardSpeciaux.checked, nb: hardSpeciaux.checked === true ? 0 : nbOfHardSpeciaux })
    }

    const handleOnChangeNbOfHardSpeciaux = (e) => {
        setHardSpeciaux({ ...hardSpeciaux, nb: e.target.value })
        setNbOfHardSpeciaux(e.target.value)
    }

    const handleOnChangeSetNbOfChar = (e) => {
        setNbOfChar({ value: e.target.value, nb: nb })
    }

    const handleOnChangeNb = (e) => {
        setNbOfChar({ value: "autres", nb: e.target.value })
        setNb(e.target.value)
    }

        const marks = []
        const marksSpeciaux = []
        const marksHardSpeciaux = []

         for (let i = 8; i <= 30; i += 2) {
            marks.push({ value: i, label: i })
        }

        for (let i = 1; i <= (nbOfChar.nb - hardSpeciaux.nb); nbOfChar.nb - hardSpeciaux.nb > 12 ? i += 2 : i++) {
            marksSpeciaux.push({ value: i, label: i })
        }

        for (let i = 1; i <= (nbOfChar.nb - speciaux.nb); nbOfChar.nb - speciaux.nb > 12 ? i += 2 : i++) {
            marksHardSpeciaux.push({ value: i, label: i })
        }

    return (
        <Stack spacing={4} style={{ padding: "0px 40px" }}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nombre de caractères</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="8"
                    name="radio-buttons-group"
                >
                    <Stack direction="row" spacing={6}>
                        {nbOfCharData.map(x => {
                            console.log(x)
                            console.log(nbOfChar)
                            return (
                                <FormControlLabel key={x.value} onChange={handleOnChangeSetNbOfChar} checked={x.value == nbOfChar.value} value={x.value} control={<Radio />} label={x.value} />
                            )  
                        })} 
                        {nbOfChar.value === 'autres' && (
                            <Slider defaultValue={nbOfChar.nb} onChange={handleOnChangeNb} step={2} marks={marks} aria-label="Default" valueLabelDisplay="auto" min={8} max={30} />
                        )}
                    </Stack>    
                </RadioGroup>
            </FormControl>
            <Stack spacing={8} direction='row'>
                <div>
                    <FormGroup>
                        <FormControlLabel disabled={!maj & !num} control={<Switch checked={min} onChange={setMin} />} label="minuscule" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={maj} onChange={setMaj} />} label="majuscule" />
                    </FormGroup>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={num} onChange={setNum} />} label="chiffres" />
                    </FormGroup>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={speciaux.checked} onChange={handleOnChangeSpeciaux} />} label="caractere speciaux" />
                        {speciaux.checked && (
                            <Slider onChange={handleOnChangeNbOfSpeciaux} marks={marksSpeciaux} defaultValue={speciaux.nb} step={1} aria-label="Default" valueLabelDisplay="auto" min={1} max={nbOfChar.nb - hardSpeciaux.nb} />
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={hardSpeciaux.checked} onChange={handleOnChangeHardSpeciaux} />} label="caractere speciaux" />
                        {hardSpeciaux.checked && (
                            <Slider onChange={handleOnChangeNbOfHardSpeciaux} defaultValue={hardSpeciaux.nb} marks={marksHardSpeciaux} step={1} aria-label="Default" valueLabelDisplay="auto" min={1} max={nbOfChar.nb - speciaux.nb} />
                        )}
                    </FormGroup>
                </div>
            </Stack>
        </Stack>
    )
}

export default DialogContent
