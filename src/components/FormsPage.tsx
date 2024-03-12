import { useForm } from "react-hook-form"

export const FormsPage = () => {
type FormInputs={
    email: string;
    password: string;
}
    const {register,handleSubmit,formState,watch} = useForm<FormInputs>({
        defaultValues:{
            email:'Piero@gmail',
            password:'piero123'
        }
    });

    const onSubmit = ((myForm: FormInputs) =>{
        console.log({myForm});
    });

    console.log(watch('email'))
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formulario</h3>

        <div style={{display:'flex', flexDirection:'column'}}>
            <input type="text" placeholder="email" {...register('email',{required: true})}></input>
            <input type="text" placeholder="password" {...register('password')}></input>
            <button type="submit"> Ingresar</button>
        </div>

        <pre>
            {JSON.stringify(formState,null,2)}
        </pre>
    </form></>
  )
}
