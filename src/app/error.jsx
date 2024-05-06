'use client'
import React, {useEffect} from 'react';

const Error = ({error, reset}) => {
    useEffect(() => {
        return () => {
            console.log('error');
        };
    }, [error]);


    return (
        <div className="text-center mt-10">
            <h1 className="hover:text-amber-600">Something went wrong,please try again</h1>
            <button onClick={()=>reset}>Try again</button>
        </div>
    );
};

export default Error;