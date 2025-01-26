import React from 'react';
import './WeaponCustomizations.css';

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
      for (const key2 of installedKeys) {
        if(props.installedParts[key2].Name === key){
          found = true;
        }
      }

      if(found === false){
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

    function HasLevels(part,index){
      if(part.HasLevels === true){
        //<input className='hasLevelNumeric' type='numeric' value={1} max={part.MaxLevels} min={1} />
        let arrayToWalk = [...Array(part.MaxLevels).keys()];
        return (<label key={index}>Level: {
            arrayToWalk.map(function(level){
              return (<label key={index+level} className='levelRadioLabel'>{level+1}<input type='radio' name='{part.WeaponName}Levels' value={level+1} /></label>)
            })
          }  </label>);
      }
    }

    return(
        <div className='row'>
            <h2>Options</h2>
              <div className='col-12 col-sm-4'>
                <h3>Design Options</h3>
                  <ul id="Customizations">
                  {
                    props.Options.map((key, index) => {
                      return (
                          <li key={key} onClick={() => { installPart(key, "Opt") }} className="btn btn-primary">{key} 
                            <span> 
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                              </svg> 
                            </span>
                          </li>
                        )
                      }
                    )
                  }   
                  </ul>
                </div>
                <div className='col-12 col-sm-4'>
                  <h3>Modifications</h3>
                  <ul id="Modifications"> 
                    {
                      props.WeaponModifications.map((key) => {
                        let mod = props.Modifications[key];
                        if(props.weaponFrame.Mounts.indexOf(mod.Mount) === -1 && mod.Mount !== 'None'){
                          
                        }else{
                          return (<li key={key} onClick={() => { installPart(key, 'Mod') }} className="btn btn-secondary">{key}
                                    <span> 
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                                      </svg> 
                                    </span>
                                  </li>)
                        }
                        
                      })
                    }
                  </ul>
                </div>
            <div className='col-12 col-sm-4'>
                <h3>Installed</h3>
                <ul id='Installed'>
                  { props.installedParts.map((part, index) => (
                    <li key={index} className='btn btn-info'> 
                      <span onClick={() => { uninstallPart(part.Name) }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                        </span>
                        {part.Name}
                        {
                          HasLevels(part,index)
                          
                        }
                        
                    </li>
                    )
                  )
                  }
                </ul>
            </div>
          </div>
    )
    
}

export default WeaponCustomization;