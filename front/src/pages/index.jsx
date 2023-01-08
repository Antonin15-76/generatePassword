import { Button, Dialog, DialogActions, DialogTitle, IconButton, Stack, TextField } from "@mui/material"
import { Copyright, Eye } from "mdi-material-ui"
import useDialog from "../hooks/useDialogs"
import CancelButton from "../components/CancelButton"
import ValidateButton from "../components/ValidateButton"
import DialogContent from './DialogContent'

const Home = () => {

    const dialog = useDialog(false)

    const handleOnSubmit = () => {

    }
    return (
        <div style={{ margin: '40px 350px' }}>
            <Stack>
                <h1 style={{ textAlign: 'center', marginBottom: '15%', fontSize: "4em" }}>Title du generator</h1>
            </Stack>
            <Stack direction="row" spacing={18} style={{ marginBottom: '3%' }}>
                <Stack direction='row' spacing={12} >
                    <div>longueur: 10</div>
                    <div>minuscule: Oui</div>
                    <div>Majuscule: Non</div>
                    <div>chiffres: Oui</div>
                    <div>Caractères speciaux: Oui - 2</div>
                </Stack>
                <Stack style={{ display: 'flex', alignItems: 'right' }}>
                    <Button onClick={dialog.handleOnClick}>Options</Button>
                    <Dialog
                            id='filtre'
                            type='Filter'
                            title='Options'
                            open={dialog.open}
                            onClose={dialog.handleOnClose}
                        >
                            <DialogTitle id='draggable-dialog-title'>
                            Paramètres
                            </DialogTitle>
                             <Stack spacing={2} align='center' style={{ padding: '15px' }}>
                                <DialogContent />
                                {/* <Form 
                                id={'add-form'} 
                                country={country} 
                                setCountry={setCountry} 
                                violationType={violationType} 
                                setViolation={setViolation}
                                montant={montant}
                                setMontant={setMontant}
                                state={state}
                                setState={setState} */}
                                {/* /> */}
                                {/* <ValidateButton form={`filtre-option-form`} title='gk' />
                                <CircularProgress sizePreset='md' /> */}
                            </Stack> 
                             <DialogActions>
                                 <Stack direction='row' justify='flex-end' spacing={2}>
                                    <CancelButton onClick={dialog.onClose } title='Annuler' />
                                    <ValidateButton id={`add-form`} onClick={handleOnSubmit} title='Valider' />
                                </Stack>
                            </DialogActions>
                        </Dialog>   
                </Stack>
            </Stack>
            <Stack direction="row" spacing={2} style={{ marginBottom: '10%' }}>
                <TextField
                id='password'
                name='password'
                // type={isPassword ? 'password' : 'text'}
                label='password'
                // value={token}
                disabled
                fullWidth
                // 
                />
                <IconButton
                // onClick={ () => {
                //     setIsPassword(!isPassword)
                // }}
                title='Show Password'
                >
                    <Eye fontSize='inherit' />                    
                </IconButton> 
                <IconButton
                // onClick={() => {navigator.clipboard.writeText(token)}}
                title='Copy'
                >
                    <Copyright fontSize='inherit' />                      
                </IconButton> 
            </Stack>  
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button>Generate password</Button>
            </Stack>
        </div>
    )
}

export default Home
