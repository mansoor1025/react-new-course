import React from 'react';

export default function colorPalette(props) {
    
    return (
        <>
            <h1 className='text-center'>color platee</h1>
            <div className='form-group'>
                <button type='button' name='' data-id="green" className='btn btn-success mx-1' onClick={props.dynamicBackground}>Green</button>
                <button type='button' name='' data-id="blue" className='btn btn-primary mx-1' onClick={props.dynamicBackground}>Blue</button>
                <button type='button' name='' data-id="yellow" className='btn btn-warning mx-1' onClick={props.dynamicBackground}>Yellow</button>
                <button type='button' name='' data-id="red" className='btn btn-danger mx-1' onClick={props.dynamicBackground}>Red</button>
            </div>
        </>
    );
}
