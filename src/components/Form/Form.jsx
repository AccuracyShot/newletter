import Input from "../Input/Input"

const Form = ({onSubmit}) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({name, email})
    }

    return <form onSubmit={safeSubmit} className="flex flex-col items-center justify-center gap-10 mt-16 mx-5">
        <Input type="text" placeholder="Insira seu nome..."/>
        <Input type="email" placeholder="Insira seu e-mail..."/>
        <button type="submit" className="py-1 px-5 w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 uppercase">Seguir</button>
    </form>
}

export default Form;