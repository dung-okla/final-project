import {Employee, Product} from "./commom.ts";

export interface DialogProp {
  isOpen: boolean
  onClose: () => void
  width?: number
  children?: any
  onSave?: () => void
}
export interface EmployeeDialogProp extends DialogProp {
  employee?: Employee
  setEmployee?: (employee: Employee) => void
  onSave?: () => void
  onEdit?: (id:number) => void
}
export interface ProductDialogProp extends DialogProp {
  employee?: Product
}

