import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [age, setage] = useState('');
    const [gender, setgender] = useState('Male');

    let navigate = useNavigate();

    const handlefirstName = e => {
        setfirstName(e.target.value);
    }
    const handlelastName = e => {
        setlastName(e.target.value);
    }
    const handlemiddleName = e => {
        setmiddleName(e.target.value);
    }
    const handleage = e => {
        setage(e.target.value);
    }
    const handlegender = e => {
        console.log(e.target.value);
        setgender(e.target.value);
    }
    const handleClick = () => {
        const member = {
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            age: age,
            gender: gender
        };
        console.log();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(member)
        };
        fetch('https://localhost:7259/member', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        navigate("/");
    }

    return (
        <div className='centered'>   
            <table className="table table-sm table-borderless mt-1">
                <tbody>
                    <tr>
                        <td style={{ width: "120px" }}>First Name</td>
                        <td><input type="text" value={firstName} onChange={handlefirstName} /></td>
                    </tr>
                    <tr>
                        <td style={{ width: "120px" }}>Middle Name</td>
                        <td><input type="text" value={middleName} onChange={handlemiddleName} /></td>
                    </tr>
                    <tr>
                        <td style={{ width: "120px" }}>Last Name</td>
                        <td><input type="text" value={lastName} onChange={handlelastName} /></td>
                    </tr>
                    <tr>
                        <td style={{ width: "120px" }}>Age</td>
                        <td><input type="text" value={age} onChange={handleage} /></td>
                    </tr>
                    <tr>
                        <td style={{ width: "120px" }}>Gender</td>
                        <td>
                            <select value={gender} onChange={handlegender} style={{ width: "120px" }} >
                                <option value="Male" defaultValue>Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: "120px" }}></td>
                        <td>
                            <button className="btn btn-primary btn-lg mar" onClick={() => navigate(-1)}>Cancel</button>
                            <button className="btn btn-success btn-lg mar" type='submit' onClick={handleClick}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Create;