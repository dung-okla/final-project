import {Stack, TextField} from "@mui/material";
import {DialogContainer} from "../../index.ts";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Product({isOpen,onClose,width=300}) {
  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}

    >
      <Stack sx={{width: width }} spacing={2}
      >
        <TextField fullWidth label="Name" variant="outlined"/>
        <TextField fullWidth label="Type" variant="outlined"/>
        <TextField fullWidth label="Original" variant="outlined"/>
      </Stack>
    </DialogContainer>


  )
}