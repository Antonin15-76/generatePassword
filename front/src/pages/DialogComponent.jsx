import { Dialog, DialogActions, DialogTitle, Stack } from "@mui/material"
import { useState } from "react"
import CancelButton from "../components/CancelButton"
import ValidateButton from "../components/ValidateButton"
import DialogContent from "./DialogContent"

const DialogComponent = (props) => {
    const { open, onClose, setValues, title, id } = props
    
    const [nbOfChar, setNbOfChar] = useState({ value : 8, nb: 8 })
    const [hardSpeciaux, setHardSpeciaux] = useState({ checked: false, nb: 0 })
    const [maj, setMaj] = useState(false)
    const [min, setMin] = useState(true)
    const [num, setNum] = useState(false)
    const [speciaux, setSpeciaux] = useState({ checked: false, nb: 0 })

    const handleOnChangeMaj = (e) => {
        setMaj(e.target.checked)
        if (e.target.checked === false & !num) {
            setMin(true)
        }
    }

    const handleOnChangeMin = (e) => {
        setMin(e.target.checked)
    }

    const handleOnChangeNum = (e) => {
        setNum(e.target.checked)
        if (e.target.checked === false & !maj) {
            setMin(true)
        }
    }

    const handleOnSubmit = () => {
        setValues({
            nbOfChar,
            hardSpeciaux,
            speciaux,
            min,
            maj,
            num
        })
        onClose()
    }
    return (
        <Dialog
            id={id}
            type='Filter'
            open={open}
            onClose={onClose}
            maxWidth='xl'
        >
            <DialogTitle id='draggable-dialog-title'>{title}</DialogTitle>
            <Stack spacing={2} align='center' style={{ padding: '15px' }}>
                <DialogContent 
                   hardSpeciaux={hardSpeciaux}
                   setHardSpeciaux={setHardSpeciaux}
                   maj={maj}
                   setMaj={handleOnChangeMaj}
                   min={min}
                   setMin={handleOnChangeMin}
                   num={num}
                   setNum={handleOnChangeNum}
                   speciaux={speciaux}
                   setSpeciaux={setSpeciaux}
                   nbOfChar={nbOfChar}
                   setNbOfChar={setNbOfChar}
                />
            </Stack> 
            <DialogActions>
                <Stack direction='row' justify='flex-end' spacing={2}>
                    <CancelButton onClick={onClose} title='Annuler' />
                    <ValidateButton id={id} onClick={handleOnSubmit} title='Valider' />
                </Stack>
            </DialogActions>
        </Dialog> 
    )
}

export default DialogComponent
