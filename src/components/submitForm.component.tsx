
interface registerForm {
    firstName: string
    lastName:string
    phone:string
}

const submitForm = (e:any) =>{
    e.preventDefault()
    
    const arrReturn:registerForm = {firstName:'',lastName:'', phone:''}
    const myForm = new FormData(e.target)
    
    arrReturn.firstName = myForm.get('first_name') as string
    arrReturn.lastName = myForm.get('last_name') as string
    arrReturn.phone = myForm.get('phone') as string

    return arrReturn
}
export {
    submitForm
}
export type { registerForm }
