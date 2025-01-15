import './App.css';
import React from 'react';
import { useState } from 'react';
import WeaponFrameWindow from './components/WeaponFrameWindow.js';
import WeaponCustomization from './components/WeaponCustomizations';
import weaponFrames from './components/WeaponFrames.js';
import WeaponOptions from './components/WeaponOptions.js';

function App() {
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
  const [weaponOptions, setWeaponOptions] = useState([]);

  
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
  }

  function onUpdateCustomizationsHandler(options){
    let Power = weaponFrames[weaponFrame].Power;
    let RC = weaponFrames[weaponFrame].RC??0;
    let Weight = weaponFrames[weaponFrame].Weight
    let DP = weaponFrames[weaponFrame].DPV;
    let FCU = weaponFrames[weaponFrame].FCU;
    let Concealability = weaponFrames[weaponFrame].Concealability;

    if(options !== undefined){
      options.forEach( (opt) => {
        Object.keys(WeaponOptions[opt]).map((key)=> {
          if(key === "DP"){
            DP = parseInt(DP) + parseInt(WeaponOptions[opt].DP);
          }
          if(key === 'FCU'){
            FCU = (parseFloat(FCU) + parseFloat(WeaponOptions[opt].FCU));
          }
          if(key === "Concealability"){
            Concealability = Concealability + WeaponOptions[opt].Concealability;
          }
          if(key === "Weight"){
            Weight = (parseFloat(Weight) + parseFloat(WeaponOptions[opt].Weight));
          }
          if(key === "RC"){
            RC = parseInt(RC) + parseInt(WeaponOptions[opt].RC);
          }
          if(key === "Power"){
            Power = Power + WeaponOptions[opt].Power;
          }
        });
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
  }


  return (
    <div className="App">
      <header className="App-header">
       Weapon Designer
      </header>
      <br></br>
      <div className='container'>
        <div className="row">
          <div className='col'>
            <label>
              Weapon Frame: <select onChange={onChangeWeaponFrame}>
                {
                  Object.keys(weaponFrames).map((key, index) => {
                    return (<option key={index} name={key}>{key}</option>)
                  })
                }
              </select>
            </label>
          </div>
          <div className='col'>
          <WeaponFrameWindow
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
            weaponOptions={weaponOptions}
          />
          </div>
        </div>
        <div className='row'>
          <WeaponCustomization weaponFrame={weaponFrame} Options={weaponFrames[weaponFrame].Options} WeaponOptions={WeaponOptions} UpdateWeaponFrameWindow={onUpdateCustomizationsHandler}    />
        </div>
      </div>
    </div>
  );
}

export default App;
