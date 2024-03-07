interface Person{
    firstName: string;
    lastName: string
    age: number;
    address:Address;
    isAlive ?: boolean;
}

interface Address{
    contry: string;
    houseNo: Number
}


export const ObjectLiteral = () => {

    const persona: Person = {
        age: 37,
        firstName: "Piero",
        isAlive: true,
        lastName: "Martell",
        address: {
            contry: "Canada",
            houseNo: 123
        }
    }

    const {} = persona

    



  return (
    <>
        <h3>Objeto literal</h3>
        <pre>
            {JSON.stringify(persona,null,2)}
        </pre>
    </>
  )
}

  