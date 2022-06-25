import React, {useState} from "react";

const MemberComponent = (props) =>{
    const Member = props.member;

    return(
        <tr>
          <td scope="row">{Member.id}</td>
          <td>{Member.firstName}</td>
          <td>{Member.middleName}</td>
          <td>{Member.lastName}</td>
          <td>{Member.age}</td>
          <td>{Member.gender}</td>
          <td><button className="btn btn-primary btn-lg mar" type="submit" onClick={props.handleEditClick}>Edit</button> 
          <button className="btn btn-secondary btn-lg mar" type="submit" onClick={props.handleDeleteClick}>Delete</button></td>
        </tr>
    )
}

export default MemberComponent;