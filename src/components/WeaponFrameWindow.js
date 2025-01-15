import React from 'react';
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

return (
    <div className='col text-left borderLinesSub'>
        <div className="row">
            <div>Weapon Frame: {props.weaponFrame}</div>
        </div>
        <div className='row'>
            <div className='col'>Damage Code: {props.weaponPower}{damageLevel[props.weaponDamage]}</div>
            <div className='col'>Mode: { props.weaponModes.join(',')}</div>
        </div>
        <div className='row'>
            <div className='col'>Concealability: {props.weaponConcealability}</div>
            <div className='col'>Weight: {props.weaponWeight.toFixed(2)}</div>
            <div className='col'>Mounts: {props.weaponMounts.join(',')}</div>
        </div>
        <div className='row'>
            <div className='col'>Ammo Cap: {props.weaponAmmoCap}</div>
            <div className='col'>Ammo Load: {props.weaponLoad}</div>
            <div className='col'>Recoil Comp: {props.weaponRecoilComp}</div>
        </div>
        <div className='row'>
            <div className='col'>FCU: {props.weaponFCU} </div>
            <div className='col'>DPV: {props.weaponDPV}</div>
        </div>
        <div className='row'>
            <div>Final Cost: {props.weaponFinalCost}¥</div>
        </div>
    </div>
    );
}

export default WeaponFrameWindow;