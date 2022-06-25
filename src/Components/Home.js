import React, { useState, useEffect, useCallback} from "react";
import MemberComponent from "./Member";
import { Link, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';

const Home = () => {
    const {Load, setLoad} = useState(false);
    let navigate = useNavigate();
    const [Members, SetMembers] = useState([]);
    useEffect(() => {
        LoadData();
    });

    const LoadData = ()=>{
        fetch('https://localhost:7259/member')
            .then(response => response.json())
            .then(result => SetMembers(result))
            .catch(err => console.log(err));
    }
    const handleEditClick = (e) => {
        navigate('/edit/'+e);
    }
    
    const handleDeleteClick = (e) => {
        if (window.confirm(`Are you sure you want to delete ?`)) {
            let response = fetch(`https://localhost:7259/member/${e}`, 
            {
              method: "DELETE",
            });
            LoadData();
        }
        setLoad(true);
    }
    return (
        <div>
            <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {Members.map(mem => <MemberComponent member={mem} handleEditClick={()=>handleEditClick(mem.id)} handleDeleteClick={()=>handleDeleteClick(mem.id)} key={mem.id} />)}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home;