import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"


enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}


interface IFormInput {
    firstName: string
    gender: GenderEnum
}


export default function RealFormLogin() {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <label>First Name</label>
            <input {...register("firstName")} />
            <label>Gender Selection</label>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Valider
            </button>
        </form>
    )
}