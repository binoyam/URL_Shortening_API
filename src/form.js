import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState("");
    const [links, setLinks] = useState("")
    const [buttonTxt, setButtonText] = useState("Copy")

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = document.getElementById("input")
        const errorTxt = document.querySelector(".error-txt");
        const validUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        const shortLinksBox = document.querySelector(".short-url-results");

        if (!text || !validUrl.test(text)) {
            input.classList.add("error");
            errorTxt.style.display = "block";
            shortLinksBox.classList.remove("show-links");
        } else {
            input.classList.remove("error");
            errorTxt.style.display = "none";
            shortLinksBox.classList.add("show-links");
            const shortenLink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                console.log(data.result)
                setLinks(data.result)
                setText("")
            }
            shortenLink()
        }
    }
    const handleCopy = (buttonId) => {
        navigator.clipboard.writeText(links.full_short_link)
        if(buttonId === 'button1'){
            setButtonText("Copied!")
        }
        else if(buttonId === 'button2'){
            setButtonText("Copied!")
        }
       else if(buttonId === 'button3'){
            setButtonText("Copied!")
        }
    }

    return (
        <>

            <form className='form'
                onSubmit={handleSubmit}>
                <label htmlFor='input'>Link Shortener</label>
                <div>
                    <input id='input'
                        type='url'
                        placeholder='Enter your URL...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <span className="error-txt">Please add a valid link</span>
                    <button type='submit'
                        onClick={handleSubmit}
                    >Shorten it!</button>
                </div>
                <p>With this free Link Shortener you can make Links shorter and easier to remember.
                    Just enter a Link into the form and click on the above Button to generate a short Link.
                    When visiting the short-Link, the short-Link will immediately redirect you to the long Link.</p>
            </form>
            <div className='short-url-results'>
                <ul>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link}</span>
                            <button id='button1' 
                            onClick={() => handleCopy('button1')}
                                className='copy-btn'>{buttonTxt === 'Copied!' ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </li>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link2}</span>
                            <button id='button2' 
                            onClick={() => handleCopy('button2')}
                                className='copy-btn'>{buttonTxt === 'Copied!' ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </li>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link3}</span>
                            <button id='button3' 
                            onClick={() => handleCopy('button3')}
                                className='copy-btn'>{buttonTxt === 'Copied!' ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
