export const BasicFunctions = () => {
const addTwoNumber =  (a : number,b:number):string =>{
  return (a + b).toString();
}



  return (
    <>
    <h3>Fuciones</h3>
    <span>El resultado de sumar: {addTwoNumber(2,8)}</span>
    </>
  )
}
