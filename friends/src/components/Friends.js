import React from 'react';
import {Button} from 'reactstrap';




const Friends = (props) => {
    const {name, age, email, id} = props.friends;
        return(
            <div>
            <p>Name: {name}</p>
            <p>Age: {age} </p>
            <p>Email:{email} </p>
            <Button color="danger" onClick={props.delete(id)}> Delete</Button>
            <Button id={id}  color="success" onClick={props.update} >Update</Button>
            </div>
            )
}

export default Friends;