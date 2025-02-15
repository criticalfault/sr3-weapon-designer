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

function showNegativeAsRed(num){
    if(num < 0){
        return ( <span className='negative'>{num}</span>);
    }else{
        return ( <span>{num}</span>);
    }
}

return (
    <div>
    <div className='col text-left borderLinesSub' id='weaponFrame'>
        <div className="row">
            <div>Weapon Name: <input value={props.weaponName} onChange={(e) => props.setWeaponName(e.target.value)} /></div>
        </div>
        <div className="row">
            <div>Weapon Frame: {props.weaponFrame}</div>
        </div>
        <div className='row'>
            <div className='col'>Damage Code: {props.weaponPower}{damageLevel[props.weaponDamage]}</div>
            <div className='col'>Mode: { props.weaponModes.join(',')}</div>
        </div>
        <div className='row'>
            <div className='col'>Concealability: {props.weaponConcealability}</div>
            <div className='col'>Recoil Comp: {props.weaponRecoilComp}</div>
        </div>
        <div className='row'>
            <div className='col'>Weight: {props.weaponWeight.toFixed(2)}</div>
            <div className='col'>Ammo Cap: {props.weaponAmmoCap}</div>
            <div className='col'>Ammo Load: {props.weaponLoad}</div>
           
        </div>
        <div className='row'>
            <div className='col'>FCU: {showNegativeAsRed(props.weaponFCU)} </div>
            <div className='col'>DPV: {props.weaponDPV}</div>
        </div>
        <div className='row'>
            <div>Final Cost: {props.weaponFinalCost}¥</div>
        </div>
        {
            props.weaponMounts.map((item, index) => {
                return (    
                        <div key={index} className='row'>
                            <div className='col'>{item}:  
                                <label> 
                                    {
                                        props.installedParts.map((key, index2) => {
                                            if(key.Mount === item){
                                                return (<span key={index2} name={key.Name}>{key.Name}</span>)
                                            }else{
                                                return;
                                            }  
                                        })
                                    }                
                                </label>
                            </div>
                        </div>
                    )
            })
        }
        </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={"true"} aria-controls="collapseOne">
                        Weapon Notes
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            
                            <ul>
                                {props.weaponNotes.map((item,index)=>{
                                    return ( <li key={index}>{item}</li>)
                                })}
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Build Notes
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                {props.weaponBuildNotes.map((item,index)=>{
                                    return ( <li key={index}>
                                                {item.Name} <ul>
                                                        <li>TN:{item.InstallTN} / {item.InstallTime}</li> 
                                                        <li>Requires {item.Tools} - {item.Skill}</li>
                                                    </ul> 
                
                                            </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}

export default WeaponFrameWindow;