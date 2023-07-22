import '../App.css';
import { useContext, useState } from 'react';
import UserContext from '../UserContext';
function Register()
{
    const {registerUser} = useContext(UserContext);
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [confPassword , setConfPass] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPass = (e)=>{
        setConfPass(e.target.value);
      }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!==confPassword)
        {
            alert("Password and Confirmation do not match!");
        }
        else
        {
            registerUser(name,password);
        }
        
    }
    return (
        <div className='Form'>
            <form className="boxGlow" onSubmit={(e)=>{handleSubmit(e)}}>
                <label>Username:</label><br/>
                <input type="text" value={name} required onChange={(e)=>{handleName(e)}}/><br/>
                <label>Password:</label><br/>
                <input type="password" value={password} minLength={6} required onChange={(e)=>{handlePassword(e)}}/><br/>
                <label>Confirm Password:</label><br/>
                <input type="password" minLength={6} value={confPassword} required onChange={(e)=>{handleConfPass(e)}} /><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
export default Register;