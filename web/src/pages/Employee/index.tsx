import {EmployeeDialog, FTable} from '../../components'
import {Header, Employee} from '../../utils'
import {Button} from "@mui/material";
import {useState} from "react";

const initialEmployee: Employee = {
  id: null,
  name: null,
  age: 0,
  address: null,
}

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curEmployee, setCurEmployee] = useState<Employee>(initialEmployee)

  const headers: Header[] = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'age', text: 'Tuoi'},
    {name: 'address', text: 'Dia Chi'},
    {name: 'action', text: ''}
  ]

  const [employees, setEmployee] = useState<Employee[]>([
    {id: 1, name: 'Dung', age: 20, address: 'Thanh Oai - Ha Noi'},
    {id: 2, name: 'Trung', age: 22, address: 'Quoc Oai - Ha Noi'},
    {id: 3, name: 'Son', age: 221, address: 'Quoc Oai 2 - Ha Noi'},
  ])
  const onAdd = () => {
      setCurEmployee(initialEmployee)
    setIsOpenDialog(true)
  }
  const onSave = () => {
    console.log(curEmployee)
    // eslint-disable-next-line no-constant-binary-expression
    if (curEmployee.id !== null) {

      setEmployee(employees.map(emp => emp.id === curEmployee.id ? curEmployee : emp))
    } else {
      setEmployee([...employees, curEmployee])
    }
    // setEmployee([...employees, curEmployee])
    setIsOpenDialog(false)
  }
  const onEdit = (id: number) => {
    console.log(id)
    setCurEmployee({...employees.find(e => e.id === id)})
    setIsOpenDialog(true)

  }
  // @ts-ignore
  return (
    <>
      <h1>Employee</h1>
      <Button variant="outlined" onClick={onAdd}>Add</Button>
      <FTable tableName={'employee hihi'} headers={headers} rows={employees}
              onEdit={onEdit}/>
      <EmployeeDialog
        isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false) }
        employee={curEmployee}
        onSave={onSave}
          onEdit={onEdit}
        setEmployee={setCurEmployee}
      />
    </>
  )
}