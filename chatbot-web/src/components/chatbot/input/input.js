
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function InputChatBot() {
  return (
    <Box sx={{ flexGrow: 1 }}>
       <TextField id="outlined-basic" label="Mensagem" variant="outlined" />
       <Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
    </Box>

  );
}

export default InputChatBot;
