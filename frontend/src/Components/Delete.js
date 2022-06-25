import React, { useState, useEffect } from 'react';

const Delete = ()=>{
    const params = useParams();
    const memId = params.id;

    const onDeleteNowClick = useCallback(
        async orderID => {
          if (window.confirm(`Are you sure you want to delete ?`)) {
            let response = await fetch(`https://localhost:7259/member/${memId}`, {
              method: "DELETE",
            });
    
            if (response.ok) {
              let body = await response.json();
            }
          }
        },[]);

    useEffect(() => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(member)
        };
        fetch('https://localhost:7259/member/' + memId, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    },[]);

}