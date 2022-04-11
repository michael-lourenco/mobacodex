import { useState } from "react"
import Client from "../core/Client"
import Button from "./Button"
import Input from './Input'

interface FormProps {
    client: Client
    clientChanged?: (client: Client) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)


    return (
        <div>
            { id ? (
                <Input 
                    text  = "Código"
                    value = { id }
                    readOnly
                    className = "mb-2"
                />
            ) : false }
            <Input 
                text  = "Name"
                value = { name }
                valueChanged = { setName }
                className = "mb-2"
            />
            <Input 
                text  = "Age"
                type = "number"
                value = { age }
                valueChanged = { setAge }
            />
            <div className="flex justify-end mt-7">
                <Button 
                    cor = "blue" 
                    className="mr-2"
                    onClick = { () => props.clientChanged?.(new Client(name, +age, id)) }
                >
                    { id ? 'Alterar' : 'Save' }
                </Button>
                <Button onClick = { props.canceled }>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}
