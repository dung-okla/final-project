import { Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {DialogProp} from "../../../utils";

// interface DialogContainer {
//   isOpen: boolean,
//   onClose: () => void,
//   width?: number,
//   children?: any,
// }

// const  DialogBody=(width: number) => {
//  return (
//    <Stack sx={{width: width }} spacing={2}
//    >
//      <TextField fullWidth label="Name" variant="outlined"/>
//      <TextField fullWidth label="Type" variant="outlined"/>
//      <TextField fullWidth label="Original" variant="outlined"/>
//    </Stack>
//   )
// }
export default ({isOpen, onClose, width=450,children,onSave}: DialogProp,)=> {
  return (
    <Dialog open={isOpen} sx={{width, margin: 'auto'}}>
      <DialogTitle>Dialog Container</DialogTitle>
      <DialogContent>
        {
         children
        }
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>Close</Button>
        <Button variant="outlined" onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}