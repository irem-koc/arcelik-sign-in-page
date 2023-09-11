import { Button, TextField } from "@mui/material";
import "./../styles/Form.css"
const Form = () => {
    return (
        <div className="form-inner">
            <TextField fullWidth className="text_input" id="outlined-basic" label="Username" variant="outlined" />
            <TextField fullWidth className="text_input" id="outlined-basic" label="Password" variant="outlined" />
            <Button fullWidth variant="contained">Sign In</Button>
        </div>
    );
};

export default Form;
