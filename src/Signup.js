import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    const navigate = useNavigate(); // Use for Navigate on Pervious
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        email: "",
        Password: ""
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {
        e.preventDefault();
        const sendData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password

        }

        axios.post("http://34.131.180.243/node/signUp", sendData)
            .then((result) => {
                if (result.data.message === 'User created successfully') {
                    alert(result.data.message);
                    navigate("/login");
                }
                else {
                    alert(result.data.message);
                }
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
                    <div className="col-md-12 text-center"><h1>Signup</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6">First Name</div>
                        <div className="col-md-6">
                            <input type="text" name="first_name" className="form-control"
                                onChange={handleChange} value={data.first_name} required
                            />

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">Last Name</div>
                        <div className="col-md-6">
                            <input type="text" name="last_name" className="form-control"
                                onChange={handleChange} value={data.last_name} required />
                        </div>
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
                            <input type="Password" name="password" className="form-control"
                                onChange={handleChange} value={data.password} required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-cener">

                            <input type="submit" name="submit" value="Signup" className="btn btn-success" />
                        </div>
                    </div>
                </div>
            </form>

        </div>



    )
}
export default Signup;