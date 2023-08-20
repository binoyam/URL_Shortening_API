import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const input = document.getElementById("input")
        const errorTxt = document.querySelector(".error-txt");
        const validUrl = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

        if (!text || !validUrl.test(text)) {
            input.classList.add("error");
            errorTxt.style.display = "block";
        } else {
            input.classList.remove("error");
            errorTxt.style.display = "none";
            const shortenLink = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                console.log(data.result)
            }
            shortenLink()
        }
    }

    return (
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
    )
}
