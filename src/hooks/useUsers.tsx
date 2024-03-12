import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ReqResUserListResponse, User } from "../interfaces";


const loadUser = async(page: number = 1) =>{
    // fetch("https://reqres.in/api/users?page=2")
    // .then(resp => resp.json())
    // .then(data => console.log(data));
    try {
        const {data} = await  axios.get<ReqResUserListResponse>('https://reqres.in/api/users',{
            params: {
            page: page
            }
        })
        return data.data
    } catch (error) {
        console.log(error)
        return [];
    }
  
}


export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    
    const currentPageRef = useRef(1);

    useEffect(()=>{
        loadUser(currentPageRef.current)
        .then(users => setUsers(users))
    })

    const nexPage = async() =>{
        currentPageRef.current++;
        const users = await loadUser(currentPageRef.current);
        if(users.length >0){
            setUsers(users);
        }else{
            currentPageRef.current--
        }
    }

    const preyPage = async() =>{
        if(currentPageRef.current <1 ) return
        currentPageRef.current--;
        const users = await loadUser(currentPageRef.current);
        setUsers(users);
    }
    return {
        // Propertis
        users,

        //Metodos
        nexPage,
        preyPage
    }
    
}

