import { Button, Grid } from "@mui/material"

const CancelButton = (props) => {
    const { id, title, onClick } = props
    return (
        <Grid item xs={12}>
            <Button onClick={onClick} id={id} title={title}>{title}</Button>
        </Grid>
    )
}
export default CancelButton
