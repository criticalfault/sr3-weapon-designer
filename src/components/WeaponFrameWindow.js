import React from 'react';
import { Typography, TextField, Grid, Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WeaponFrameWindow = (props) => {

const damageLevel = {
    1:"L",
    2:"M",
    3:"S",
    4:"D",
    5:"L (Stun)",
    6:"M (Stun)",
    7:"S (Stun)",
    8:"D (Stun)"
}

function showNegativeAsRed(num){
    if(num < 0){
        return ( <Typography component="span" sx={{ color: 'error.main' }}>{num}</Typography>);
    }else{
        return ( <Typography component="span">{num}</Typography>);
    }
}

return (
    <Box>
      <Box sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth
              label="Weapon Name" 
              value={props.weaponName} 
              onChange={(e) => props.setWeaponName(e.target.value)}
              variant="outlined"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              <strong>Weapon Frame:</strong> {props.weaponFrame}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Damage Code:</strong> {props.weaponPower}{damageLevel[props.weaponDamage]}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Mode:</strong> {props.weaponModes.join(',')}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Concealability:</strong> {props.weaponConcealability}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Recoil Comp:</strong> {props.weaponRecoilComp}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Weight:</strong> {props.weaponWeight.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Ammo Cap:</strong> {props.weaponAmmoCap}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">
              <strong>Ammo Load:</strong> {props.weaponLoad}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>FCU:</strong> {showNegativeAsRed(props.weaponFCU)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>DPV:</strong> {props.weaponDPV}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Final Cost: {props.weaponFinalCost}¥
            </Typography>
          </Grid>
          
          {props.weaponMounts.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Typography variant="body1">
                <strong>{item}:</strong> {
                  props.installedParts.map((key, index2) => {
                    if(key.Mount === item){
                      return (<Typography component="span" key={index2}>{key.Name}</Typography>)
                    }
                    return null;
                  })
                }
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="weapon-notes-content"
            id="weapon-notes-header"
          >
            <Typography>Weapon Notes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {props.weaponNotes.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
        
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="build-notes-content"
            id="build-notes-header"
          >
            <Typography>Build Notes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {props.weaponBuildNotes.map((item, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={item.Name}
                    secondary={
                      <>
                        <Typography component="span" variant="body2">TN: {item.InstallTN} / {item.InstallTime}</Typography>
                        <br />
                        <Typography component="span" variant="body2">Requires {item.Tools} - {item.Skill}</Typography>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default WeaponFrameWindow;