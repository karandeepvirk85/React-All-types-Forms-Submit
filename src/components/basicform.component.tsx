import { useState } from "react"
import {submitForm, registerForm} from "./submitForm.component"

const BasicForm = () =>{
    const [currentForm, setData] = useState<registerForm>({firstName:'',lastName:'', phone:''})
    
    const handleFormSubmit = (e:any) =>{
        const data = submitForm(e)
        setData(data)
    }

    const CreateLinkedList = () =>{
        const convertedToArray:any = []

        Object.entries(currentForm).map(item =>{
            convertedToArray.push({key:item[0], value:item[1]}) 
        })

        const List = convertedToArray.map((items:any) => {
            return (
                <p>{items.value} </p>
            )
        })
        
        return List;
    }

    return(
        <div>
            <h1>Form Submit Using FormData</h1>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="first_name"
                />
                <input 
                    type = "text"
                    name= "last_name"
                />
                <input 
                    type = "text"
                    name= "phone"
                />
                <button type="submit">Submit Form</button>
            </form>
            <CreateLinkedList/>
        </div>
    )
}
export default BasicForm