import '../App.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';
function SignOut() 
{
    const {logoutUser,loggedUser} = useContext(UserContext);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        logoutUser(loggedUser);
        navigate("/");
    }
    
    return (
        <>
            <button onClick={(e)=>{handleSubmit(e)}}>Sign Out</button>
        </>
    );
}
export default SignOut