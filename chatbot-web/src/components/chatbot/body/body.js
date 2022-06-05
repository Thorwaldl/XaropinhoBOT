
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:  '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: 'white',
}));


function BodyChatBot() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>Mensagem enviada pelo bot</Item>
          <Item>Mensagem enviada pelo bot 1 </Item>
          <Item>Mensagem enviada pelo bot 2 </Item>
          <Item>Mensagem enviada pelo bot 3 </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Mensagem enviada pelo usuário</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyChatBot;
