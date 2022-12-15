import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateMapping = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ userid: localStorage.getItem("userid"), description: "", layout: "" });
    const [resource, setResource] = useState([
    ]);
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleRadioChange = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            layout: value
        });
    };
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            setResource([...resource, e.target.value])
        } else {
            // remove from list
            setResource(
                resource.filter((resource) => resource !== e.target.value),
            );
        }
    }

    const generateResource = (e) => {
        e.preventDefault();
        if (resource.length === 0) {
            alert("You must select at least one visualisation");
            return;
        }
        if (data.layout === "") {
            alert("You must select a layout");
            return;
        }

        const sendData = {
            user: data.userid,
            description: data.description,
            resource: JSON.stringify(resource),
            layout: data.layout
        }

        axios.post("http://34.131.205.106:3001/generatemapping", sendData)
            .then((result) => {
                alert(result.data.message);
                navigate("/dashboard");
            }, (err) => { alert(err.response.data.message) })
    }

    return (
        <div className="profile container">
            <form onSubmit={generateResource}>
                <section className="h-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-9 col-xl-7">
                                <div className="card">
                                    <div className="card-body p-4 text-black">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <p className="lead fw-normal mb-0">Select visualisations to generate link</p>
                                        </div>
                                        <div className="row g-2">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col" colSpan="3">Resource</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="1,2" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 1 & 2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="3,4,10" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 3 & 4 & 10</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="5" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 5</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="6" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 6</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="7,10" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 7 & 10</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="text-center"><input className="form-check-input me-2" type="checkbox" name="resource" value="9" onChange={handleCheckboxChange} /></th>
                                                        <td colSpan="3">Visualization 9</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-12 form-outline mb-4">
                                                <label className="form-label">Description</label>
                                                <input type="text" id="form5Example2" className="form-control" name="description" required onChange={handleChange} value={data.description} />
                                            </div>
                                            <div className="col-12  form-outline mb-4">
                                                <label className="form-label">Layout</label>
                                                <br></br>
                                                <label className="form-label">Type A &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <input className="form-check-input me-2" type="radio" name="layout" onChange={handleRadioChange} value="a" />
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <label className="form-label">Type B &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                                <input className="form-check-input me-2" type="radio" name="layout" onChange={handleRadioChange} value="b" />
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    <div className="progress-bar bg-dark" role="progressbar" style={{ width: '25%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div></div>
                                                <button type="submit" className="col-12 btn btn-outline-dark div-4 mt-4">
                                                    Create resource
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default CreateMapping;

