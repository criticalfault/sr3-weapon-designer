import React from 'react';
import './WeaponCustomizations.css';
import WeaponOptions from './WeaponOptions.js';

const WeaponCustomization = (props) => {

    const damageLevel = {
        1:"L",
        2:"M",
        3:"S",
        4:"D",
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }
      
    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
      
    function drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        if(ev.target.getAttribute('draggable') === true){
            ev.target.parent.appendChild(document.getElementById(data));
        }else{
            ev.target.appendChild(document.getElementById(data));
        }
        props.UpdateWeaponFrameWindow(document.getElementById('Installed').innerText.split("\n"));
    }

    function noDrop(ev){
        return false;
    }
   
    return(
        <div className='row'>
            <h2>Options</h2>
            <div className='col'>
                <h3>Base Options</h3>
                <ul id="Options" onDrop={drop} onDragOver={allowDrop}>
                {
                    props.Options.map((key, index) => {

                        let levelInput = '';
                        if ('Levels' in WeaponOptions[key]){
                            levelInput = (<input type='numbers' max={WeaponOptions[key].Levels.length} min={1} step={1} ></input>);
                        }

                        return (<li className='handle' key={key} id={"Options"+index} draggable="true" onDragStart={drag}>
                                    <span><i className="fa-solid fa-bars rightPadd"></i></span>{key}
                                    {levelInput}
                                </li>)
                  })
                }   
                </ul>
            </div>
            <div className='col'>
                <h3>Installed</h3>
                <ul id='Installed' onDrop={drop} onDragOver={allowDrop}>

                </ul>
            </div>
            <div className='col'>
                <h3>Extra Customization</h3>
                <ul id="Customizations" onDrop={drop} onDragOver={allowDrop}>
                    {
                       Object.keys(props.Modifications).map((key, index) => {
                           return (<li className='handle' key={key} id={"Modifications"+index} draggable="true" onDragStart={drag}><span><i className="fa-solid fa-bars rightPadd"></i></span>{key}</li>)
                    })
                    }
                </ul>
            </div>
        </div>
    )
    
}

export default WeaponCustomization;