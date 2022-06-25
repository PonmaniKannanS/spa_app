import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Edit = (props) => {
    
    const params = useParams();
    const memId = params.id;
    const [member, setMember] = useState({});

    const [firstName, setfirstName] = useState(member.firstName);
    const [lastName, setlastName] = useState(member.lastName);
    const [middleName, setmiddleName] = useState(member.middleName);
    const [age, setage] = useState(member.age);
    const [gender, setgender] = useState(member.gender);

    let history = useNavigate();

    useEffect(() => {
        fetch('https://localhost:7259/member/' + memId)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setMember(result)
            })
            .catch(err => console.log(err));
    },[]);

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
        setgender(e.target.value);
    }
    const handleClick = () => {
        const member = {
            firstName : firstName,
            lastName : lastName,
            middleName : middleName,
            age: age,
            gender : gender
        };
        console.log(JSON.stringify(member));
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(member)
        };
        fetch('https://localhost:7259/member', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));

        history("/");
    }

    return (
        <div>
            {console.log('JSON', JSON.stringify(member))}
            <table className="table table-sm table-borderless mt-1">
            <tbody>
                <tr>
                    <td style={{ width: "120px" }}>First Name</td>
                    <td><input type="text" value={member.firstName} onChange={handlefirstName} /></td>
                </tr>
                <tr>
                    <td style={{ width: "120px" }}>Middle Name</td>
                    <td><input type="text" value={member.middleName} onChange={handlemiddleName} /></td>
                </tr>
                <tr>
                    <td style={{ width: "120px" }}>Last Name</td>
                    <td><input type="text" value={member.lastName} onChange={handlelastName} /></td>
                </tr>
                <tr>
                    <td style={{ width: "120px" }}>Age</td>
                    <td><input type="text" value={member.age} onChange={handleage} /></td>
                </tr>
                <tr>
                    <td style={{ width: "120px" }}>Gender</td>
                    <td>
                        <select value={member.gender} onChange={handlegender} >
                           <option value="Male" defaultValue>Male</option>
                           <option value="Female">Female</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td style={{ width: "120px" }}></td>
                    <td><button type='submit' onClick={handleClick}>Submit</button></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Edit;