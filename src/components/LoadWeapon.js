import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

// Using styled API for MUI v7
const ModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.vars.palette.background.paper,
  border: "2px solid #000",
  boxShadow: 24,
  padding: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

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
        <Typography component="span" sx={{ textTransform: "capitalize" }}>
          {" "}
          - {tempWeapon.WeaponName}
        </Typography>
      );
    }
    return null;
  };

  return (
    <Box>
      <Button onClick={SaveWeapon} variant="contained" sx={{ mr: 1 }}>
        Save
      </Button>
      <Button onClick={handleOpen} variant="contained" sx={{ mr: 1 }}>
        Load
      </Button>
      <Button onClick={handleOpenLocalStorage} variant="contained">
        Local Storage Save/Load
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
            Import Weapon
          </Typography>
          <Box component="label" sx={{ display: 'block', mt: 2 }}>
            <input type="file" name="characterLoad" onChange={LoadCharacter} />
          </Box>
        </ModalBox>
      </Modal>
      
      <Modal
        open={openLocalStorage}
        onClose={handleCloseLocalStorage}
        aria-labelledby="local-storage-modal-title"
        aria-describedby="local-storage-modal-description"
      >
        <ModalBox>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                This uses your browsers storage mechanism to save/load weapons.
                This is PER computer and PER browser. So its not for instance
                available on your phone if you saved it on your PC. You'll need to
                use the file save for that, but then you can save it on your
                phone!
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Save Weapon</Typography>
              <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 1, mb: 2 }} />
              
              <StyledButton
                variant="contained"
                fullWidth
                onClick={() => localStroageSave(1)}
              >
                Save 1
              </StyledButton>
              
              <StyledButton
                variant="contained"
                fullWidth
                onClick={() => localStroageSave(2)}
              >
                Save 2
              </StyledButton>
              
              <StyledButton
                variant="contained"
                fullWidth
                onClick={() => localStroageSave(3)}
              >
                Save 3
              </StyledButton>
              
              <StyledButton
                variant="contained"
                fullWidth
                onClick={() => localStroageSave(4)}
              >
                Save 4
              </StyledButton>
              
              <StyledButton
                variant="contained"
                fullWidth
                onClick={() => localStroageSave(5)}
              >
                Save 5
              </StyledButton>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Load Weapon</Typography>
              <Box sx={{ borderTop: 1, borderColor: 'divider', pt: 1, mb: 2 }} />
              
              <StyledButton
                variant="outlined"
                fullWidth
                onClick={() => localStroageLoad(1)}
              >
                Load {getSaveDescription(1)}
              </StyledButton>
              
              <StyledButton
                variant="outlined"
                fullWidth
                onClick={() => localStroageLoad(2)}
              >
                Load {getSaveDescription(2)}
              </StyledButton>
              
              <StyledButton
                variant="outlined"
                fullWidth
                onClick={() => localStroageLoad(3)}
              >
                Load {getSaveDescription(3)}
              </StyledButton>
              
              <StyledButton
                variant="outlined"
                fullWidth
                onClick={() => localStroageLoad(4)}
              >
                Load {getSaveDescription(4)}
              </StyledButton>
              
              <StyledButton
                variant="outlined"
                fullWidth
                onClick={() => localStroageLoad(5)}
              >
                Load {getSaveDescription(5)}
              </StyledButton>
            </Grid>
          </Grid>
        </ModalBox>
      </Modal>
    </Box>
  );
}