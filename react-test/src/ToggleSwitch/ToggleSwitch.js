import React, { useState } from 'react'
import '../ToggleSwitch/ToggleSwitch.css'


const ToggleSwitch = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (
        <div onChange={triggerToggle}  className={`toggle ${toggle ? 'toggle--checked' : ' '}`}>
            <div className="toggle-circle">
                <input className="toggle-input" type="checkbox" aria-label="ToggleSwitch" /> 
                {/*<input className="toggle-input-2" type="radio" aria-label="ToggleSwitch" /> App*/}
            </div>
            <div className="toggle-container">
                <div className="toggle-check">
                    <span>
                        <ul>
                            <li>Entry1</li>
                            <li>Entry2</li>
                            <li>Entry3</li>
                        </ul>
                    </span>
                </div>
                <div className="toggle-uncheck">
                    <span></span>
                </div>
            </div>
            
        </div>
    )
}

export default ToggleSwitch;