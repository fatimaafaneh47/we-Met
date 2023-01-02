import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';


const Groups = () => {
  return (
    <div className="App"> 
    <Sidebar></Sidebar>
    <Grid>
      <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Add Group
        </Typography> 
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField type="title" placeholder="Enter Title" label="Title" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField type="description" placeholder="Enter Description" label="Description" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  </div>
  )
}

export default Groups