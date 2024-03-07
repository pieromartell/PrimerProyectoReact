export const BasicTypes= () =>{


const name: string = 'Piero'
const age : number = 8;
const isActive : boolean = true;

const power: string[] = ['React','Angular','Vue']
power.push('Node')
    return(
       <>

            <h3>Tipos Basicos</h3>
            {name}  {age}  {isActive ? 'True': 'false'}
            <br></br>
            {power.join(", ")}
       
       </>
    )
}
