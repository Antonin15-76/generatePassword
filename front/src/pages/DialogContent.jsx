import { Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, Switch } from "@mui/material"
import { useState } from "react"



const DialogContent = () => {

    const [min, setMin] = useState(true)
    const [maj, setMaj] = useState(true)
    const [num, setNum] = useState(false)
    const [speciaux, setSpeciaux] = useState(false)

    const handleOnChangeMin = (e) => {
        setMin(e.target.checked)
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

    return (
        <Stack spacing={4}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Nombre de caractères</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="8"
                    name="radio-buttons-group"
                >
                    <Stack direction="row" spacing={6}>
                        <FormControlLabel value="8" control={<Radio />} label="8" />
                        <FormControlLabel value="10" control={<Radio />} label="10" />
                        <FormControlLabel value="12" control={<Radio />} label="12" />
                        <FormControlLabel value="autres" control={<Radio />} label="autres" />
                    </Stack>    
                </RadioGroup>
            </FormControl>
            <Stack spacing={8} direction='row'>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={min} onChange={handleOnChangeMin} />} label="minuscule" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={maj} onChange={handleOnChangeMaj} />} label="majuscule" />
                    </FormGroup>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={num} onChange={handleOnChangeNum} />} label="chiffres" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={speciaux} onChange={handleOnChangeSpeciaux} />} label="caractere speciaux" />
                    </FormGroup> 
                </div>
            </Stack>
        </Stack>
    )
}

export default DialogContent
