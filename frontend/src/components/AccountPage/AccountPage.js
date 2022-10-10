import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteUser, updateUser } from '../../store/session';
import './AccountPage.css'


function AccountPage () {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [firstName, setFirstName] = useState(sessionUser ? sessionUser.firstName : null);
    const [lastName, setLastName] = useState(sessionUser ? sessionUser.lastName : null);
    const [email, setEmail] = useState(sessionUser ? sessionUser.email : null);

    if (!sessionUser) {

        return (
            <Redirect to="/" />
        );
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        
        dispatch(updateUser(sessionUser.id, firstName, lastName, email))

        

    };

    const handleChange = (name) => (e) => {
        if (sessionUser.email === "demo@demo.com") {
            alert("Demo User cannot be edited")
            return;
            
        }
        switch (name) {
            case "first":
                setFirstName(e.target.value);
                return;
            case "last":
                setLastName(e.target.value);
                return;
            case "email":
                setEmail(e.target.value);
                return;
            default:
            return null;
        }
    }

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete your account?")) {
            dispatch(deleteUser(sessionUser.id));
        }
    };

    return (
        <>
            <div className="AccountOuterContainer">
                <form  >
                    <div className="AccountOuterContainerRow"> 
                        <div >First Name</div>
                        <input type='text' onBlur={handleUpdate} onChange={handleChange('first')} value={firstName} />
                    </div>
                    <div className="AccountOuterContainerRow">
                        <div >Last Name</div>
                        <input type='text' onBlur={handleUpdate} onChange={handleChange('last')} value={lastName} />
                    </div>
                    <div className="AccountOuterContainerRow">
                        <div >Email</div>
                        <input type='text' onBlur={handleUpdate} onChange={handleChange('email')} value={email} />
                    </div>
                </form>
                <div className='AccountDelete' onClick={handleDelete} >DELETE ACCOUNT</div>
            </div>
        </>
    )
}

export default AccountPage