import React from 'react'
import './App.css';

function UrlResults() {
    return (
        <div className='short-url-results'>
            <ul>
                <li className='result'>
                    <span className='long-link'>Long-Link</span>
                    <div className='divider'>
                        <span className='short-link'>Short-Link</span>
                        <button className='copy-btn'>Copy</button>
                    </div>
                </li>
                <li className='result'>
                    <span className='long-link'>Long-Link</span>
                    <div className='divider'>
                        <span className='short-link'>Short-Link</span>
                        <button className='copy-btn'>Copy</button>
                    </div>
                </li>
                <li className='result'>
                    <span className='long-link'>Long-Link</span>
                    <div className='divider'>
                        <span className='short-link'>Short-Link</span>
                        <button className='copy-btn'>Copy</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default UrlResults