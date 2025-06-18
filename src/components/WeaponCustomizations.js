import React from 'react';
import './WeaponCustomizations.css';
import { ToastContainer, toast } from "react-toastify";
import { Typography, Grid, List, ListItem, Button, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const WeaponCustomization = (props) => {

    function installPart(key, type) {
      const installedKeys = Object.keys(props.installedParts);
      var partToInstall = {};
      if(type === "Mod"){
        partToInstall = {...props.Modifications[key]};
      }else if(type === "Opt"){
        partToInstall = {...props.WeaponOptions[key]};
      }
      
      let found = false;
      let Incompatiable = false;
      let mountUsed = false;
      let mountsUsed = [];
      for (const key2 of installedKeys) {
        if(props.installedParts[key2].Name === key){
          found = true;
          toast(props.installedParts[key2].Name + " already installed");
        }
        if(props.installedParts[key2].hasOwnProperty('IncompatiableWith') && props.installedParts[key2].IncompatiableWith.indexOf(key) !== -1){
          Incompatiable = true;
          toast(props.installedParts[key2].Name+" Incompatiable with "+key);
        }
        if(props.installedParts[key2].hasOwnProperty('Mount') && props.installedParts[key2].Mount !== "None"){
          mountsUsed.push(props.installedParts[key2].Mount);
        }
      }

      if(found === false && mountsUsed.indexOf(partToInstall.Mount) !== -1){
        mountUsed = true;
        toast(partToInstall.Name+" uses "+partToInstall.Mount+". Which is full");
      }

      if(found === false && Incompatiable === false && mountUsed === false){
        props.installPart(prevInstalledParts => [...prevInstalledParts, partToInstall]);
      }
    }

    function uninstallPart(key){
      const editedParts = [...props.installedParts];
      for(let i=0; i < editedParts.length; i++){
        if(editedParts[i].Name === key){
          editedParts.splice(i, 1);
          break;
        }
      }
      props.installPart([...editedParts]);
    }

    function HasLevels(part, index){
      if(part.HasLevels === true){
        let arrayToWalk = [...Array(part.MaxLevels).keys()];
        return (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Level:</Typography>
            <RadioGroup row name={`${part.WeaponName}Levels`}>
              {arrayToWalk.map((level) => (
                <FormControlLabel 
                  key={index+level} 
                  value={level+1} 
                  control={<Radio size="small" />} 
                  label={level+1} 
                  sx={{ mr: 0.5 }}
                />
              ))}
            </RadioGroup>
          </Box>
        );
      }
      return null;
    }

    return(
      <Grid container spacing={3}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="h3" gutterBottom>Design Options</Typography>
          <List>
            {props.Options.map((key, index) => (
              <ListItem key={key} disableGutters>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => { installPart(key, "Opt") }}
                  endIcon={<AddCircleIcon />}
                  fullWidth
                  sx={{ justifyContent: 'space-between', textAlign: 'left' }}
                >
                  {key}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="h3" gutterBottom>Modifications</Typography>
          <List>
            {props.WeaponModifications.map((key) => {
              let mod = props.Modifications[key];
              if(props.weaponFrame.Mounts.indexOf(mod.Mount) === -1 && mod.Mount !== 'None'){
                return null;
              } else {
                return (
                  <ListItem key={key} disableGutters style={{'maxWidth':'250px'}}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      onClick={() => { installPart(key, 'Mod') }}
                      endIcon={<AddCircleIcon />}
                      fullWidth
                      sx={{ justifyContent: 'space-between', textAlign: 'left' }}
                    >
                      {key}
                    </Button>
                  </ListItem>
                );
              }
            })}
          </List>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" component="h3" gutterBottom>Installed</Typography>
          <List>
            {props.installedParts.map((part, index) => (
              <ListItem key={index} disableGutters>
                <Button 
                  variant="contained" 
                  color="info" 
                  startIcon={<CancelIcon onClick={() => { uninstallPart(part.Name) }} />}
                  fullWidth
                  sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
                >
                  {part.Name}
                  {HasLevels(part, index)}
                </Button>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    );
}

export default WeaponCustomization;