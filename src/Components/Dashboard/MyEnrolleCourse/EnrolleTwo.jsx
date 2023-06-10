import React from 'react';

const EnrolleTwo = ({item, index}) => {
    console.log(item, index)
    return (
        <div>
            <p>{index+1}.{item}</p>
        </div>
    );
};

export default EnrolleTwo;