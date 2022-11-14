import React from 'react';
import './WeaponCustomizations.css';

const WeaponCustomization = (props) => {

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

    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
      
      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        props.UpdateWeaponFrameWindow(document.getElementById('Installed').innerText.split("\n"));
      }

      function noDrop(ev){
        return false;
      }
   

    return(
        <div className='row'>
            <h2>Options</h2>
            <div className='col'>
                <h3>Possible Options</h3>
                <ul id="Customizations" onDrop={drop} onDragOver={allowDrop}>
                {
                    props.Options.map((key, index) => {
                        return (<li key={key} id={"drag"+index} onDrop={noDrop} draggable="true" onDragStart={drag}>{key}</li>)
                  })
                }   
                </ul>
            </div>
            <div className='col'>
                <h3>Installed</h3>
                <ul id='Installed' onDrop={drop} onDragOver={allowDrop}>

                </ul>
            </div>
        </div>
    )
    
}

export default WeaponCustomization;