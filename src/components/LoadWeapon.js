import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Grid2 } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function LoadWeapon(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openLocalStorage, setOpenLocalStorage] = React.useState(false);
  const handleOpenLocalStorage = () => setOpenLocalStorage(true);
  const handleCloseLocalStorage = () => setOpenLocalStorage(false);

  const SaveWeapon = () => {
    let weapon = props.weaponBuild;
    let weaponJSON = JSON.stringify(weapon);
    const blob = new Blob([weaponJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a link element and trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "SRCustomWeapon.json";
    link.click();
  
    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
    try {
      fathom.trackEvent("Save Weapon"); // eslint-disable-line
    } catch (err) {
      console.log(err);
      console.log("Fathom wasn't found. Prolly a blocker");
    }
  };

  const LoadCharacter = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const fileData = e.target.result;
      props.loadWeapon(JSON.parse(fileData));
      setOpen(false);
    };
    reader.readAsText(file);
    try {
      fathom.trackEvent("Load Weapon"); // eslint-disable-line
    } catch (err) {
      console.log(err);
      console.log("Fathom wasn't found. Prolly a blocker");
    }
  };

  const localStroageSave = (saveSlot) => {
    let Weap = props.weaponBuild;
    console.log(Weap);
    let weaponJSON = JSON.stringify(Weap);
    localStorage.setItem("weaponSlot" + saveSlot, weaponJSON);
    setOpenLocalStorage(false);
  };

  const localStroageLoad = (saveSlot) => {
    let weaponJSON = localStorage.getItem("weaponSlot" + saveSlot);
    let weaponToLoad = JSON.parse(weaponJSON)
    props.loadWeapon(weaponToLoad);
    setOpenLocalStorage(false);
  };

  const getSaveDescription = (saveSlot) => {
    let weaponJSON = localStorage.getItem("weaponSlot" + saveSlot);
    if (weaponJSON !== null) {
      let tempWeapon = JSON.parse(weaponJSON);
      return (
        <span style={{ "textTransform": "capitalize" }}>
          {" "}
          - {tempWeapon.WeaponName}
        </span>
      );
    }
  };

  return (
    <div>
      <Button onClick={SaveWeapon} variant="contained">
        Save
      </Button>
      &nbsp;&nbsp;
      <Button onClick={handleOpen} variant="contained">
        Load
      </Button>
      &nbsp;&nbsp;
      <Button onClick={handleOpenLocalStorage} variant="contained">
        Local Storage Save/Load
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label>
            Import Weapon<br></br>
            <br></br>
            <input type="file" name="characterLoad" onChange={LoadCharacter} />
          </label>
        </Box>
      </Modal>
      <Modal
        open={openLocalStorage}
        onClose={handleCloseLocalStorage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
              This uses your browsers storage mechanism to save/load weapons.
              This is PER computer and PER browser. So its not for instance
              available on your phone if you saved it on your PC. You'll need to
              use the file save for that, but then you can save it on your
              phone!
            </Grid2>
            <Grid2 item xs={12} md={6}>
              Save Weapon
              <hr></hr>
              <Button
                onClick={function (event) {
                  localStroageSave(1);
                }}
              >
                Save 1{" "}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageSave(2);
                }}
              >
                Save 2{" "}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageSave(3);
                }}
              >
                Save 3{" "}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageSave(4);
                }}
              >
                Save 4{" "}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageSave(5);
                }}
              >
                Save 5{" "}
              </Button>
              <br></br>
            </Grid2>
            <Grid2 item xs={12} md={6}>
              Load Weapon
              <hr></hr>
              <Button
                onClick={function (event) {
                  localStroageLoad(1);
                }}
              >
                Load {getSaveDescription(1)}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageLoad(2);
                }}
              >
                Load {getSaveDescription(2)}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageLoad(3);
                }}
              >
                Load {getSaveDescription(3)}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageLoad(4);
                }}
              >
                Load {getSaveDescription(4)}
              </Button>
              <br></br>
              <Button
                onClick={function (event) {
                  localStroageLoad(5);
                }}
              >
                Load {getSaveDescription(5)}
              </Button>
              <br></br>
            </Grid2>
          </Grid2>
        </Box>
      </Modal>
    </div>
  );
}