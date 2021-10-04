import React from "react";
import { Grid, makeStyles, Box, withWidth } from "@material-ui/core";
import frontal from './img/front.jpg';


const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
}));

const Contenedor = (props) => {
  const classes = estilos();

  return (
    
   <div>
     
    <Grid container rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12}>
            <Box className="central"><img src={frontal} alt="JIG - Diseño Web"/></Box>
        </Grid>
        <Grid item xs={6}>
            <Box className="cajones">Hola</Box>
        </Grid>
        <Grid item xs={6}>
            <Box className="cajones">Hola</Box>
        </Grid>
    </Grid>
    
    </div>
  );
};

export default withWidth()(Contenedor);