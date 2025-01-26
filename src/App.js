import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import WeaponFrameWindow from './components/WeaponFrameWindow.js';
import WeaponCustomization from './components/WeaponCustomizations.js';
import weaponFrames from './components/WeaponFrames.js';
import WeaponOptionsPossible from './components/WeaponOptions.js';
import WeaponModifications from './components/WeaponModifications.js';
import LoadWeapon from "./components/LoadWeapon";
import Modifications from './components/WeaponModifications.js';

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
    setWeaponBuildNotes([]);
  }

  useEffect(function(){
    onUpdateCustomizationsHandler(installedParts)
  },[installedParts,weaponName])

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
              Weapon Frame: <select onChange={onChangeWeaponFrame} value={weaponFrame}>
                {
                  Object.keys(weaponFrames).map((key, index) => {
                    return (<option key={index} name={key}>{key}</option>)
                  })
                }
              </select>
            </label>
            <br></br>
            <div className='alert alert-danger'>Still pending, don't rely on this yet!
            <LoadWeapon
              weaponBuild={weaponBuild}
              loadWeapon={handleLoadWeapon}
            />
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
          <WeaponCustomization weaponFrame={weaponFrames[weaponFrame]} Options={weaponFrames[weaponFrame].Options} Modifications={WeaponModifications} WeaponModifications={weaponFrames[weaponFrame].Modifications} installPart={setInstalledParts} installedParts={installedParts} WeaponOptions={WeaponOptionsPossible} UpdateWeaponFrameWindow={onUpdateCustomizationsHandler}    />
        </div>
      </div>
    </div>
  );
}

export default App;
