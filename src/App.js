import './App.css';
import './synthwave.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem, Paper, Alert } from '@mui/material';
import WeaponFrameWindow from './components/WeaponFrameWindow.js';
import WeaponCustomization from './components/WeaponCustomizations.js';
import weaponFrames from './components/WeaponFrames.js';
import WeaponOptionsPossible from './components/WeaponOptions.js';
import WeaponModifications from './components/WeaponModifications.js';
import LoadWeapon from "./components/LoadWeapon";

function App() {
  // Synthwave paper style
  const synthwavePaperStyle = {
    p: 3, 
    backdropFilter: 'blur(5px)', 
    background: 'rgba(52, 22, 119, 0.7)', 
    border: '1px solid rgba(255, 42, 109, 0.3)', 
    boxShadow: '0 0 15px rgba(255, 42, 109, 0.3), 0 0 30px rgba(5, 217, 232, 0.2)'
  };

  const [weaponName, setWeaponName] = useState('Temp Name');
  const [weaponFrame, setWeaponFrame] = useState("Hold-Out Pistol");
  const [weaponPower, setWeaponPower] = useState(4);
  const [weaponDamage, setWeaponDamage] = useState(1);
  const [weaponModes, setWeaponModes] = useState(['SS']);
  const [weaponConcealability, setWeaponConcealability] = useState(8);
  const [weaponWeight, setWeaponWeight] = useState(.5);
  const [weaponAmmoCap, setWeaponAmmoCap] = useState(4);
  const [weaponLoad, setWeaponLoad] = useState("(c)");
  const [weaponMounts, setWeaponMounts] = useState([]);
  const [weaponFCU, setWeaponFCU] = useState(1);
  const [weaponDPV, setWeaponDPV] = useState(25);
  const [weaponRecoilComp, setWeaponRecoilComp] = useState(0);
  const [weaponFinalCost, setWeaponFinalCost] = useState(weaponDPV*5);
  const [installedParts, setInstalledParts] = useState([]);
  const [weaponNotes, setWeaponNotes] = useState([]);
  const [weaponBuildNotes, setWeaponBuildNotes] = useState([]);
  const [weaponBuild,setWeaponBuild] = useState({});
  
  const onChangeWeaponFrame = (event) =>{
    setWeaponFrame(event.target.value);
    setWeaponPower(weaponFrames[event.target.value].Power);
    setWeaponDamage(weaponFrames[event.target.value]['Damage Level']);
    setWeaponModes(weaponFrames[event.target.value].Mode);
    setWeaponMounts(weaponFrames[event.target.value].Mounts);
    setWeaponConcealability(weaponFrames[event.target.value].Concealability);
    setWeaponWeight(weaponFrames[event.target.value].Weight);
    setWeaponLoad(weaponFrames[event.target.value]["Ammo Load"]);
    setWeaponAmmoCap(weaponFrames[event.target.value]["Ammo Cap"]);
    setWeaponFCU(weaponFrames[event.target.value].FCU);
    setWeaponDPV(weaponFrames[event.target.value].DPV);
    setWeaponFinalCost(weaponFrames[event.target.value].DPV*5);
    setInstalledParts([]);
    setWeaponNotes([]);
    setWeaponBuildNotes([]);
  }

  useEffect(function(){
    function onUpdateCustomizationsHandler(options){
      let Power = weaponFrames[weaponFrame].Power;
      let RC = weaponFrames[weaponFrame].RC??0;
      let Weight = weaponFrames[weaponFrame].Weight
      let DP = weaponFrames[weaponFrame].DPV;
      let FCU = weaponFrames[weaponFrame].FCU;
      let Concealability = weaponFrames[weaponFrame].Concealability;
      let Notes = [];
      let BuildNotes = [];
      if(options !== undefined){
        options.forEach( (opt) => {
            if(opt.hasOwnProperty('DP')){
              DP = parseInt(DP) + parseInt(opt.DP);
            }
            if(opt.hasOwnProperty('FCU')){
              FCU = (parseFloat(FCU) + parseFloat(opt.FCU));
            }
            if(opt.hasOwnProperty('Concealability')){
              Concealability = Concealability + opt.Concealability;
            }
            if(opt.hasOwnProperty('Weight')){
              Weight = (parseFloat(Weight) + parseFloat(opt.Weight));
            }
            if(opt.hasOwnProperty('RC')){
              RC = parseInt(RC) + parseInt(opt.RC);
            }
            if(opt.hasOwnProperty('Power')){
              Power = Power + opt.Power;
            }
            if(opt.hasOwnProperty('Extra')){
              Notes.push(opt.Extra);
            }
            if(opt.hasOwnProperty('InstallTime')){
              let buildSegment = {
                "Name":opt.Name,
                "InstallTime":opt.InstallTime,
                "InstallTN":opt.InstallTN,
                "Skill":opt.Skill,
                "Tools":opt.Tools
              }
              BuildNotes.push(buildSegment);
            }
        });
      }
      setWeaponPower(Power);
      setWeaponDamage(weaponFrames[weaponFrame]['Damage Level']);
      setWeaponModes(weaponFrames[weaponFrame].Mode);
      setWeaponConcealability(Concealability);
      setWeaponWeight(Weight);
      setWeaponLoad(weaponFrames[weaponFrame]["Ammo Load"]);
      setWeaponAmmoCap(weaponFrames[weaponFrame]["Ammo Cap"]);
      setWeaponRecoilComp(RC);
      setWeaponFCU(FCU);
      setWeaponDPV(DP);
      setWeaponFinalCost(DP*5);
      setWeaponNotes(Notes);
      setWeaponBuildNotes(BuildNotes);

      setWeaponBuild({
        "WeaponName":weaponName,
        "Power":Power,
        "WeaponFrame":weaponFrame,
        "WeaponDamage":weaponFrames[weaponFrame]['Damage Level'],
        "WeaponModes":weaponFrames[weaponFrame].Mode,
        "WeaponConcealability":Concealability,
        "WeaponWeight":Weight,
        "WeaponLoad":weaponFrames[weaponFrame]["Ammo Load"],
        "WeaponAmmoCap":weaponFrames[weaponFrame]["Ammo Cap"],
        "WeaponRecoilComp":RC,
        "WeaponFCU":FCU,
        "WeaponDP":DP,
        "WeaponFinalCost":DP*5,
        "WeaponNotes":Notes,
        "WeaponBuildNotes":BuildNotes,
        "WeaponInstalledParts":installedParts
      })
    }

    onUpdateCustomizationsHandler(installedParts)
  },[installedParts,weaponName])

  const handleLoadWeapon = (weapon) => {
    console.log(weapon)
    //Set the Weapon up upon load
    setWeaponFrame(weapon.WeaponFrame);
    setWeaponPower(weapon.WeaponPower);
    setWeaponDamage(weapon.WeaponDamage);
    setWeaponModes(weapon.WeaponModes);
    setWeaponConcealability(weapon.WeaponConcealability);
    setWeaponWeight(weapon.WeaponWeight);
    setWeaponLoad(weapon.WeaponAmmoLoad);
    setWeaponAmmoCap(weapon.WeaponAmmoCap);
    setWeaponRecoilComp(weapon.WeaponRC);
    setWeaponFCU(weapon.WeaponFCU);
    setWeaponDPV(weapon.WeaponDP);
    setWeaponFinalCost(weapon.WeaponDP*5);
    setWeaponNotes(weapon.WeaponNotes);
    setWeaponBuildNotes(weapon.WeaponBuildNotes);
    setInstalledParts(weapon.WeaponInstalledParts);
  }

  const onChangeWeaponMount = (event) => {
    console.log("Weapon Mount Changed");
    console.log(event);
  }

  return (
    <Box className="App" sx={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <div className="retro-sun"></div>
      <Box 
        sx={{ 
          background: 'linear-gradient(90deg, #ff2a6d 0%, #05d9e8 100%)',
          color: 'white', 
          py: 3, 
          mb: 4,
          boxShadow: '0 4px 20px rgba(255, 42, 109, 0.5), 0 0 40px rgba(5, 217, 232, 0.3)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #05d9e8, #ff2a6d, #05d9e8)',
            boxShadow: '0 0 20px #05d9e8, 0 0 40px #05d9e8',
            animation: 'neon-border 3s infinite linear'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #ff2a6d, #05d9e8, #ff2a6d)',
            boxShadow: '0 0 20px #ff2a6d, 0 0 40px #ff2a6d',
            animation: 'neon-border 3s infinite linear reverse'
          }
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          align="center"
          sx={{ 
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textShadow: '0 0 10px #ff2a6d, 0 0 20px #ff2a6d, 0 0 30px #ff2a6d',
          }}
        >
          SHADOWRUN WEAPON DESIGNER
        </Typography>
      </Box>
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={synthwavePaperStyle}>
              <FormControl fullWidth margin="normal" sx={{ '& .MuiInputLabel-root': { color: '#05d9e8' } }}>
                <InputLabel id="weapon-frame-label" sx={{ color: '#05d9e8' }}>Weapon Frame</InputLabel>
                <Select
                  labelId="weapon-frame-label"
                  value={weaponFrame}
                  onChange={onChangeWeaponFrame}
                  label="Weapon Frame"
                  sx={{ 
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(5, 217, 232, 0.5)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#05d9e8' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#05d9e8' },
                    '& .MuiSvgIcon-root': { color: '#05d9e8' }
                  }}
                >
                  {
                    Object.keys(weaponFrames).map((key, index) => (
                      <MenuItem key={index} value={key}>{key}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <Box mt={2}>
                <Alert severity="error" sx={{ 
                  backgroundColor: 'rgba(255, 56, 100, 0.15)', 
                  color: '#ff3864',
                  border: '1px solid rgba(255, 56, 100, 0.3)',
                  '& .MuiAlert-icon': { color: '#ff3864' }
                }}>
                  Still pending, don't rely on this yet!
                </Alert>
                <Box mt={2} className="neon-border" sx={{ p: 2, borderRadius: '4px' }}>
                  <LoadWeapon
                    weaponBuild={weaponBuild}
                    loadWeapon={handleLoadWeapon}
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={synthwavePaperStyle}>
              <WeaponFrameWindow
                installedParts={installedParts}
                setWeaponName={setWeaponName} 
                weaponName={weaponName}
                weaponFrame={weaponFrame}
                weaponPower={weaponPower}
                weaponDamage={weaponDamage}
                weaponModes={weaponModes}
                weaponMounts={weaponMounts}
                onChangeWeaponMount={onChangeWeaponMount}
                weaponConcealability={weaponConcealability}
                weaponWeight={weaponWeight}
                weaponLoad={weaponLoad}
                weaponAmmoCap={weaponAmmoCap}
                weaponFCU={weaponFCU}
                weaponDPV={weaponDPV}
                weaponFinalCost={weaponFinalCost}
                weaponRecoilComp={weaponRecoilComp}
                weaponOptions={WeaponOptionsPossible}
                weaponNotes={weaponNotes}
                weaponBuildNotes={weaponBuildNotes}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={synthwavePaperStyle}>
              <WeaponCustomization 
                weaponFrame={weaponFrames[weaponFrame]} 
                Options={weaponFrames[weaponFrame].Options} 
                Modifications={WeaponModifications} 
                WeaponModifications={weaponFrames[weaponFrame].Modifications} 
                installPart={setInstalledParts} 
                installedParts={installedParts} 
                WeaponOptions={WeaponOptionsPossible} 
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;