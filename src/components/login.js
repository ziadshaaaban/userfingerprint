
import './styles/login.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "./header";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    localStorage.setItem("username", username)
    useEffect(() => {
        localStorage.clear();

        if (localStorage.getItem('tokenauth')) {
            navigate("/verify")
        } else {
            navigate("/")

        }
    }, [])
    async function signin() {
        setIsLoading(true)
        setErrorMessage("")
        try {
            let item = { username, password };
            let result = await fetch("https://backendssh.vercel.app/website/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json",

                },
                body: JSON.stringify(item)
            });
            result = await result.json();
            let tokenauth = result.result.tokenFor2AuthCode;

            localStorage.setItem("tokenauth", tokenauth)
            navigate("/verify", { username })
            setIsLoading(false)

        }
        catch (error) {
            setErrorMessage("Invalid username or password");
            // alert("Invalid username or password")
            setIsLoading(false)
            onClear()

        }
    } const [isLoading, setIsLoading] = useState(false);
    function onClear() {
        setUsername("")
        setPassword("")


    }
    return (

        <>


            <div className="registration-formm ">





                <div className="social-mediaa">

                    <h3 className=''>Forensics fingerprint elicitation system </h3>



                </div>
                <div className='bg-primary form' > <div className="form-group ">
                    <h3 className='hh'>Login </h3>
                </div>
                    <div className="form-group">
                        <input type="emial" id='form-email' className="form-control item" placeholder="Enter Your Username" required value={username}
                            onChange={(e) => {
                                setErrorMessage(""); setUsername(e.target.value)
                            }} />
                    </div>
                    <div className="form-group">
                        <input className="form-control item" placeholder="Enter Password" required
                            type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className='lo' onClick={signin}  >Log In   </button>
                    </div>

                    <div >


                        {errorMessage && <div className="invcode">{errorMessage}
                        </div>}
                        <div className="" ><div className="blr"> </div><div className="apprr">
                            {isLoading ? (<>
                                <div className="loading-screenrr"></div>

                                <div className="loadrr">
                                    <div className="blending-spinnerrrr"></div>
                                </div>

                            </>
                            ) : null}</div></div>
                    </div>
                </div>





            </div>


        </>

    );
}

export default Login;