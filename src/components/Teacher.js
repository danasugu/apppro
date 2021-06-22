import React from 'react';

const Teacher = (props) => {
    const{name, email, phone} = props;
    return(
      <div>
        <h3>Teacher's Details</h3>
        <p>Name: {name}</p>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
      </div>
    )
}

export default Teacher;