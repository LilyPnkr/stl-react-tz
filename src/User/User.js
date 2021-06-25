import React from "react"

export default (props) => (
    <div style={{ marginLeft: '32px', paddingBottom: '16px' }}>
        <h3>Name: {props.name}</h3>
        <p>Phone: {props.phone}</p>
        <p>E-mail: {props.email}</p>
        <p>Country: {props.country}</p>
        <p>Age: {props.age}</p>
        <div >
            <button style={{ marginRight: '16px' }} >Update</button>
            <button onClick={props.remoweItem}>Delete</button>
        </div>
    </div >
)