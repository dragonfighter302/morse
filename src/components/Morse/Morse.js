import React, {useState, useEffect} from 'react';
import s from './Morse.module.css'
import About from "../About/About";
import decodeMorse, {toMorse} from "../../morse";

const Morse = () => {
    const [input, setInput] = useState('');
    const textInput = React.useRef();

    useEffect(() => {
        // Moving cursor to the end
        textInput.current.setSelectionRange(textInput.current.value.length, textInput.current.value.length);

        document.body.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.removeEventListener('keydown', onKeyDown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    const onButtonClick = (event) => {
        if (event.target.value === 'dot') {
            new Audio('dot.mp3').play();
            setInput(input + '.');
        } else {
            new Audio('dash.mp3').play();
            setInput(input + '-');
        }
    }

    const onKeyDown = (event) => {
        textInput.current.focus();
        if (event.keyCode === 13) morseProcessing();
        if (event.code === 'Period') new Audio('dot.mp3').play();
        if (event.code === 'Minus') new Audio('dash.mp3').play();
    }


    const morseProcessing = () => {
        const firstChar = input.charCodeAt(0);
        if (firstChar >= 48 && firstChar <= 122) {
            setInput(toMorse(input));
        } else {
            setInput(decodeMorse(input));
        }
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className={s['container']}>
            <header>
                <h1 className={s['title']}>
                    <a href="/morse/">Morse<span className={s['dot']}>.</span></a>
                </h1>
                <About/>
            </header>
            <div className={s['morse-wrapper']}>
                <div className={s['morse-container']}>
                    <input type="text"
                           ref={textInput}
                           value={input}
                           placeholder={".... . -.--   .... . .-.. .--."}
                           onChange={handleChange}
                    />
                    <div className={s['controls']}>
                        <button className={s['morse-btn']}
                                onClick={onButtonClick}
                                value={'dot'}>.
                        </button>
                        <button className={s['morse-btn']}
                                onClick={onButtonClick}
                                value={'dash'}>-
                        </button>
                        <button className={s['red-btn']}
                                onClick={morseProcessing}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Morse;