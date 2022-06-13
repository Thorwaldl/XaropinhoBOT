
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ItemLeft = styled(Paper)(({ theme }) => ({
  backgroundColor:  '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'left',
  color: 'white',
  width: '300px',
  margin: '12px'
}));


function BodyChatBot() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ItemLeft>Mensagem enviada pelo bot</ItemLeft>
          <ItemLeft>Mensagem enviada pelo bot 1 </ItemLeft>
          <ItemLeft>Mensagem enviada pelo bot 2 </ItemLeft>
          <ItemLeft>Mensagem enviada pelo bot 3 </ItemLeft>
        </Grid>
        <Grid item xs={6}>
          <ItemLeft>Mensagem enviada pelo usuário</ItemLeft>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BodyChatBot;
