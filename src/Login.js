import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

    const navigate = useNavigate(); // Use for Navigate on Pervious
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            email: data.email,
            password: data.password
        }

        axios.post("http://34.131.180.243/node/login", sendData)
            .then((result) => {
                    alert(result.data.message);
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('firstname', result.data.firstname);
                    localStorage.setItem('lastname', result.data.lastname);
                    localStorage.setItem('email', result.data.email);
                    localStorage.setItem('userid', result.data.userid);
                    localStorage.setItem('urlmappings', JSON.stringify(result.data.urlmappings));
                    props.setLoggedIn(true);
                    navigate("/dashboard");
            }, (err) =>  { alert(err.response.data.message)})
    }

    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate("/dashboard");
        }
    });


    return (
        <div className="main-box">
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-12 text-center"><h1>Login</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Email</div>
                        <div className="col-md-6">
                            <input type="email" name="email" className="form-control"
                                onChange={handleChange} value={data.email} required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">Password</div>
                        <div className="col-md-6">
                            <input type="password" name="password" className="form-control"
                                onChange={handleChange} value={data.password} required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-cener">
                            <input type="submit" name="submit" value="Login" className="btn btn-success" />
                        </div>
                    </div>
                </div>
            </form>

        </div>



    )
}
export default Login;


