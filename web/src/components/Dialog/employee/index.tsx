import {Stack, TextField} from "@mui/material";
import {DialogContainer} from "../../index.ts";
import {EmployeeDialogProp} from "../../../utils";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default function Employee({isOpen,onClose,width=300,employee, setEmployee, onSave, onEdit}:EmployeeDialogProp) {

  const onchange = (e:any) => {
    console.log(e.target.value)
    setEmployee({...employee, [e.target.name]: e.target.value})
  }
  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
       onSave={onSave}

    >
      <Stack sx={{width: width }} spacing={2}
      >
        <TextField name={'name'} fullWidth label="Name" variant="outlined" value={employee?.name} onChange={onchange}/>
        <TextField name={'age'} fullWidth label="Age" variant="outlined" value={employee?.age}  onChange={onchange}/>
        <TextField name={'adress'} fullWidth label="Adress" variant="outlined" value={employee?.address}  onChange={onchange} />
      </Stack>
    </DialogContainer>


  )
}