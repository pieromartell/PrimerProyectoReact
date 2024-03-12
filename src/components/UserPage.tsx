import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import type { ReqResUserListResponse,User } from '../interfaces';
import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRows';


export const UserPage = () => {

    const {users,nexPage,preyPage} = useUsers();
  return (
    <>
    <h3>Usuarios</h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user =>(
                <UserRow key={user.id} user={user}></UserRow>
                ))
            }

        </tbody>
    </table>
    <div>
        <button onClick={preyPage}>Prev</button>
        <button onClick={nexPage}>Next</button>
    </div>
   
    </>
    
  )
}

