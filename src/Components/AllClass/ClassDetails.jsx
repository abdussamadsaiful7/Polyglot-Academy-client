import React, { useState } from 'react';

const ClassDetails = () => {
    const [course, setCourse] = useState()


    const url = `https://fantasy-toy-server.vercel.app/alltoys?email=${user?.email}&${course?.price}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <h2>This is my class</h2>
        </div>
    );
};

export default ClassDetails;