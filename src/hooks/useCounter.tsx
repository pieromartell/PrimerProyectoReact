import { useState } from "react";

interface Option{
    initialValue? : number;
}

export const useCounter =  ({initialValue = 0}: Option) => {


    const [count, setcount] = useState<number>(10)

    const increaseBy = (value : number) =>{
        const newValue = count + value;
        if(newValue < 0){return;}
        setcount(count + value);
    }

  return {

    //Properties
    count,

    //Methods
    increaseBy,
  }
}
