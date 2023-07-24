import '../App.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
const SignIn = () => {

    const {users, loginUser}=useContext(UserContext);
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const user = users[name];
        if(user && user.password===password){
            loginUser(name,password);
            navigate("/");
        }else{
            alert("Invalid username or password");
        }
        
    }
    return (
        <div className="Form">
             <div class="text">
            Sign In
            </div>
            <form  className="boxGlow" onSubmit={(e)=>{handleSubmit(e)}}>
            <div class="inputbox">
            <input type="text" value={name} required onChange={(e)=>{handleName(e)}}/>
                <span>Username</span>
                </div>
                <div class="inputbox">
                <input type="password" value={password} required onChange={(e)=>{handlePassword(e)}}/>
                <span>Password</span>
                </div>        
                
                
                <button type="submit" value="Submit" ><span>Submit</span></button>
            </form>
        </div>
    );
}
export default SignIn;