import React from 'react'
import Nav from './Nav'
import UrlResults from './UrlResults'
import Form from './form';
import './App.css';

function UrlShortner() {
    return (
        <div className='container'>
            <Nav />
            <div className='main'>
                <Form />
                <UrlResults />
            </div>
        </div>
    )
}

export default UrlShortner