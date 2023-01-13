import { Button, IconButton, Stack, TextField, Typography } from "@mui/material"
import { Copyright, Eye } from "mdi-material-ui"
import useDialog from "../hooks/useDialogs"
import { genereratePassword } from "./function"
import DialogComponent from "./DialogComponent"
import { useState } from "react"
import { useMemo } from "react"

const Home = () => {

    const dialog = useDialog(false)
    const [values, setValues] = useState()

    const dataType = useMemo(() => [
            {
                id: "charSpe",
                bool: values?.speciaux.checked,
                number: values?.speciaux.nb
            },
            {
                id: "charSpeHard",
                bool: values?.hardSpeciaux.checked,
                number: values?.hardSpeciaux.nb
            },
            {
                id: "min",
                bool: values?.min,
                number: null
            },
            {
                id: "maj",
                bool: values?.maj,
                number: null
            },
            {
                id: "number",
                bool: values?.num,
                number: null
            }
            
        ], [values])

    const threePassword = useMemo(() => genereratePassword(values?.nbOfChar?.nb, dataType), [dataType, values?.nbOfChar?.nb])

    return (
        <div style={{ margin: '0px 350px' }}>
            <Stack>
                <h1 style={{ textAlign: 'center', marginBottom: '15%', fontSize: "4em" }}>ProWeb Password</h1>
            </Stack>
            <Stack direction="row" spacing={6} style={{ marginBottom: '3%' }}>
                <Stack direction="row" spacing={1}>
                    <div>longueur: </div><Typography color='blue'>{values?.nbOfChar?.nb || 0}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <div>minuscule: </div><Typography color={values?.min ? '#32CD32' : 'red'}>{values?.min ? 'oui' : 'non'}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <div>Majuscule: </div><Typography color={values?.maj ? '#32CD32' : 'red'}>{values?.maj ? 'oui' : 'non'}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <div>chiffres: </div><Typography color={values?.num ? '#32CD32' : 'red'}>{values?.num ? 'oui' : 'non'}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <div>Caractères speciaux (niveau 1): </div><Typography color={values?.speciaux?.checked ? '#32CD32' : 'red'}>{values?.speciaux?.checked ? 'oui' : 'non'} - {values?.speciaux?.nb || 0}</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <div>Caractères speciaux (niveau 2): </div><Typography color={values?.hardSpeciaux?.checked ? '#32CD32' : 'red'}>{values?.hardSpeciaux?.checked ? 'oui' : 'non'} - {values?.hardSpeciaux?.nb || 0}</Typography>
                </Stack>
            </Stack>
            {threePassword?.map(x => {
                return (
                    <Stack key={x.id} direction="row" spacing={2} style={{ marginBottom: '10%' }}>
                        <TextField
                        id='password'
                        name='password'
                        label='password'
                        value={x.password}
                        disabled
                        fullWidth
                        /> 
                        <IconButton
                        onClick={() => {navigator.clipboard.writeText(x.password)}}
                        title='Copy'
                        >
                            <Copyright fontSize='inherit' />                      
                        </IconButton> 
                    </Stack>
                )
            })}
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={dialog.handleOnClick}>Generate password</Button>
                <DialogComponent
                        title='Pamareters'
                        open={dialog.open}
                        onClose={dialog.onClose}
                        setValues={setValues}
                    />
            </Stack>
        </div>
    )
}

export default Home
