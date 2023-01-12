import { Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Slider, Stack, Switch } from "@mui/material"
import { useState } from "react"



const DialogContent = () => {

    const nbOfCharData = [
        {
            id: "8",
            value: "8"
        },
        {
            id: "10",
            value: "10"
        },
        {
            id: "12",
            value: "12"
        },
        {
            id: "autres",
            value: "autres"
        },
    ]

    const [hardSpeciaux, setHardSpeciaux] = useState(false)
    const [maj, setMaj] = useState(false)
    const [num, setNum] = useState(false)
    const [speciaux, setSpeciaux] = useState(false)

    const handleOnChangeHardSpeciaux = (e) => {
        setHardSpeciaux(e.target.checked)
    }

    const handleOnChangeMaj = (e) => {
        setMaj(e.target.checked)
    }

    const handleOnChangeNum = (e) => {
        setNum(e.target.checked)
    }
    const handleOnChangeSpeciaux = (e) => {
        setSpeciaux(e.target.checked)
    }

    const [nbOfChar, setNbOfChar] = useState("8")

    const handleOnChangeSetNbOfChar = (e) => {
        setNbOfChar(e.target.value)
    }


    return (
        <Stack spacing={4} style={{ padding: "20px", width: "500px"}}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nombre de caractères</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="8"
                    name="radio-buttons-group"
                >
                    <Stack direction="row" spacing={6}>
                        {nbOfCharData.map(x => {
                            return (
                                <FormControlLabel onChange={handleOnChangeSetNbOfChar} checked={x.value === nbOfChar} value={x.value} control={<Radio />} label={x.value} />
                            )
                        })}
                        <Slider defaultValue={8} step={2} aria-label="Default" valueLabelDisplay="auto" min={8} max={30} />
                    </Stack>    
                </RadioGroup>
            </FormControl>
            <Stack spacing={8} direction='row'>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={maj} onChange={handleOnChangeMaj} />} label="majuscule" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={num} onChange={handleOnChangeNum} />} label="chiffres" />
                    </FormGroup>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={speciaux} onChange={handleOnChangeSpeciaux} />} label="caractere speciaux" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={hardSpeciaux} onChange={handleOnChangeHardSpeciaux} />} label="caractere speciaux" />
                    </FormGroup>
                </div>
            </Stack>
        </Stack>
    )
}

export default DialogContent
