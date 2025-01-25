import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import WeaponFrameWindow from './components/WeaponFrameWindow.js';
import WeaponCustomization from './components/WeaponCustomizations.js';
import weaponFrames from './components/WeaponFrames.js';
import WeaponOptionsPossible from './components/WeaponOptions.js';
import WeaponModifications from './components/WeaponModifications.js';

function App() {
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
    setWeaponBuildNotes([])
  }

  useEffect(function(){
    onUpdateCustomizationsHandler(installedParts)
  },[installedParts])

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
      "Power":Power,
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
      "WeaponBuildNotes":BuildNotes

    })
  }


  const SaveWeapon = () => {
    let weapon = weaponBuild;

    let characterJSON = JSON.stringify(weapon);
    const blob = new Blob([characterJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "SRCustomWeapon.json";
    link.click();
  
    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
    // try {
    //   fathom.trackEvent("Save Weapon"); // eslint-disable-line
    // } catch (err) {
    //   console.log(err);
    //   console.log("Fathom wasn't found. Prolly a blocker");
    // }
  };

  const LoadWeapon = (event) => {
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   try{
    //     const fileData = e.target.result;
    //     const characterToLoad = fixOlderCharactersMissingProperties(JSON.parse(fileData));
    //     props.loadCharacter(characterToLoad);
    //     console.log(characterToLoad.edition)
    //     props.ChangeEdition(characterToLoad.edition);
    //     setOpen(false);
    //   }catch(err){
    //     console.log(err);
    //     console.log("Something went wrong trying to load a character");
    //     alert("Unable to load character. Please ensure that the character is a json file you made with this site. PDFs cannot be read unfortunately.");
    //   }
    // }    
    // reader.readAsText(file); 
    // try{
    //   fathom.trackEvent('Load Character'); // eslint-disable-line
    // }catch(err){
    //     console.log(err);
    //     console.log("Fathom wasn't found. Prolly a blocker");
    // }
  }


  return (
    <div className="App">
      <header className="App-header">
       Weapon Designer
      </header>
      <br></br>
      <div className='container'>
        <div className="row">
          <div className='col-12 col-sm-6'>
            <label>
              Weapon Frame: <select onChange={onChangeWeaponFrame}>
                {
                  Object.keys(weaponFrames).map((key, index) => {
                    return (<option key={index} name={key}>{key}</option>)
                  })
                }
              </select>
            </label>
            <br></br>
            <div>Still pending, don't rely on this yet!
              <button class="btn btn-primary" tabindex="0" onClick={SaveWeapon}>Save</button>&nbsp;&nbsp;
              {/* <button class="btn btn-primary" tabindex="0" onClick={LoadWeapon}>Load</button>&nbsp;&nbsp; */}
              {/* <button class="btn btn-primary" tabindex="0" onClick={SaveCharacter}>Local Storage Save/Load</button> */}
            </div>
          </div>
          <div className='col-12 col-sm-6'>
          <WeaponFrameWindow
            setWeaponName={setWeaponName} 
            weaponName={weaponName}
            weaponFrame={weaponFrame}
            weaponPower={weaponPower}
            weaponDamage={weaponDamage}
            weaponModes={weaponModes}
            weaponMounts={weaponMounts}
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
          </div>
        </div>
        <div className='row'>
          <WeaponCustomization weaponFrame={weaponFrames[weaponFrame]} Options={weaponFrames[weaponFrame].Options} WeaponModifications={WeaponModifications} installPart={setInstalledParts} installedParts={installedParts} WeaponOptions={WeaponOptionsPossible} UpdateWeaponFrameWindow={onUpdateCustomizationsHandler}    />
        </div>
      </div>
    </div>
  );
}

export default App;
