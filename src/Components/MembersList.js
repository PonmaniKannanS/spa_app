import React, {useState, useEffect} from "react";
import MemberComponent from "./Member";
import Home from './Home';
import Create from './Create';
import Edit from  './Edit';
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
const MembersList = () => {

    const[Members, SetMembers] = useState([]);
    useEffect(() => {
        fetch('https://localhost:7259/member')
            .then(response => response.json())
            .then(result => SetMembers(result))
            .catch(err => console.log(err));
    });

    return(
        <div>
            
        </div>
    )
}

export default MembersList;