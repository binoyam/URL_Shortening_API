import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState("");
    const [links, setLinks] = useState("");

    const guideTxtOne = document.querySelector(".instruction-one");
    const guideTxtTwo = document.querySelector(".instruction-two");

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
            guideTxtTwo.style.display = 'block';
            guideTxtOne.style.display = 'none';

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
    const handleCopy = () => {

        const copyBtns = document.querySelectorAll(".copy-btn");

        copyBtns.forEach(copyBtn => {
            copyBtn.addEventListener('click', () => {
                copyBtn.innerText = 'Copy'
                if (copyBtn.id === 'button1') {
                    copyBtn.innerText = 'Copied!'
                    navigator.clipboard.writeText(links.short_link)
                }
                else if (copyBtn.id === 'button2') {
                    copyBtn.innerText = 'Copied!'
                    navigator.clipboard.writeText(links.short_link2)
                }
                else if (copyBtn.id === 'button3') {
                    copyBtn.innerText = 'Copied!'
                    navigator.clipboard.writeText(links.short_link3)
                }
            })
        })

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
                <p>
                    <span className='instruction-one'>With this free Link Shortener you can make Links shorter and easier to remember.<br />Just <b>enter a Link into the form and click on the "Shorten it!" Button above</b> to generate 3 short Links.</span>
                    <span className='instruction-two'>Choose a short link generated which are in blue color and then <b> click on the "Copy" Button to copy the link to your clip-board.</b> After you paste the link in your browser, the short-Link will immediately redirect you to the long Link. Enjoy!</span>
                </p>
            </form>

            <div className='short-url-results'>
                <ul>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link}</span>
                            <button id='button1'
                                onClick={handleCopy}
                                className='copy-btn'>Copy</button>
                        </div>
                    </li>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link2}</span>
                            <button id='button2'
                                onClick={handleCopy}
                                className='copy-btn'>Copy</button>
                        </div>
                    </li>
                    <li className='result'>
                        <span className='long-link'>{links.original_link}</span>
                        <div className='divider'>
                            <span className='short-link'>{links.short_link3}</span>
                            <button id='button3'
                                onClick={handleCopy}
                                className='copy-btn'>Copy</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
