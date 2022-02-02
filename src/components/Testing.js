import React, { useState } from 'react';


export default function Testing(props) {
    const [text, setText] = useState('');

    const upperCasefunc = () => {
        const upper_case = text.toUpperCase();
        setText(upper_case);
        props.showAlert('Upper case Successfully', 'success')
    }

    const changeFunc = (e) => {
        setText(e.target.value);
    }

    const lowerCasefunc = () => {
        const lower_case = text.toLowerCase();
        setText(lower_case);
        props.showAlert('Lower case Successfully', 'success')
    }

    const checkEmails = () => {
        console.log('=======================');
        let check = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        let custom_string = '';
        for (let i = 0; i < check.length; i++) {
            custom_string += check[i] + ' ';
        }
        setText(custom_string);
    }


    return (
        <>
            <div className='container-fluid'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changeFunc}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="button" className='btn btn-success mx-1' onClick={upperCasefunc}>Upper Case</button>
                        <button type="button" className='btn btn-primary mx-1' onClick={lowerCasefunc}>Lower Case</button>
                        <button type="button" className='btn btn-danger mx-1' onClick={checkEmails}>Check Emails</button>
                    </div>
                </form>
                <h2>Text Summary</h2>
                <p>{text.split(' ').length} Words and {text.length} character</p>

                <h2>Preview</h2>
                <p>{text}</p>

                <h2>All Emails Present in TextBox</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

