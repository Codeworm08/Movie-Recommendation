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
            <div class="text">
            Register Here
            </div>
            <form className="boxGlow" onSubmit={(e)=>{handleSubmit(e)}}>
                <div class="inputbox">
                <input type="text" value={name} required onChange={(e)=>{handleName(e)}}/>
                <span>Username</span>
                </div>
                <div class="inputbox">
                <input type="password" value={password} minLength={6} required onChange={(e)=>{handlePassword(e)}}/>
                <span>Password</span>
                </div>
                <div class="inputbox">
                <input type="password" minLength={6} value={confPassword} required onChange={(e)=>{handleConfPass(e)}} />
                <span>Confirm Password</span>
                </div>
                <button type="submit" value="Submit" ><span>Submit</span></button>
            </form>
        </div>
        
    );
}
export default Register;