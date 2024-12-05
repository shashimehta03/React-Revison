import React, { useState } from "react"
import { Form } from "react-router-dom";

const Eleven = (props) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isregister, setisregister] = useState(false);
    const [islogin, setislogin] = useState(false);
    const [user,setuser]=useState([]);
    const handelauth=()=>{
        if(isregister){
            //login
            const users=user.find((u)=>u.email===email && u.password===password);
            if(users){
                setislogin(true);
            }
            else{
                alert('Login falied plaese check your credinential');
            }
        }
        else{
            //register
            const newUser={name,email,password};
            setuser([...user,newUser]);
            localStorage.setItem('user',JSON.stringify([...user,newUser]));
            setislogin(true);
        }

    }
    const handellogout =()=>{
        setislogin(false);
        setname('');
        setemail('');
        setpassword('');
    }
    const storedData = JSON.parse(localStorage.getItem('user'));
   console.log(storedData);

    return (
        <div>
            <h1>Registration form</h1>
            {
                islogin ? (
                    <div>
                        <h3>
                            hey member ,{name}
                        </h3>
                        <button onClick={handellogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <h2>{isregister ?"Login Page" :"register page"}</h2>
                        <form>
                            <input type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                            <input type="text" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                            <input type='text' placeholder="password" onChange={(e) => setpassword(e.target.value)} />
                            <button onClick={handelauth}>
                                {
                                    isregister ? 'login' : 'Register'
                                }
                            </button>
                        </form>
                        <p>
                            {
                                isregister ? "dont have an acccount Register now" : "i am already member Login"
                            }
                        </p>
                        <button onClick={() => setisregister(!isregister)}>
                            {
                                isregister ? 'Register' : 'Login'
                            }
                        </button>
                    </div>
                )
            }


        </div>
    )
};

export default Eleven;
