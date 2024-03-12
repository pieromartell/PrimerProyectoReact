import { User } from "../interfaces";

interface Props{
    user: User;
}

export const UserRow = ({user}:Props) => {
const {avatar, first_name,last_name, email} = user;
  return (
    <tr key={user.id}>
    <td><img src={avatar} style={{width: '50px'}} alt="User avatar"></img></td>
    <td>{first_name} {last_name}</td>
    <td>{email}</td>
 </tr> 
  )
}
