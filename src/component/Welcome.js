import { Grid, Typography } from "@material-ui/core";



const Welcome = (props) => {
  return (
    <>
   
    <Grid
     
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">ππ΄π»π²πΎπΌπ΄ ππΎ  π½π°ππΊππΈ.π²πΎπΌ</Typography>
      </Grid>
    </Grid>
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh"  }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
    
  );
};

export default Welcome;
