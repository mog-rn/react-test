import React, { useState } from 'react'



const ToggleSwitch = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }

    return (
        <div onChange={triggerToggle}  className="toggle">
            <div className="toggle-container">
                <div className="toggle-check">
                    <span></span>
                </div>
                <div className="toggle-uncheck">
                    <span></span>
                </div>
            </div>
            <div className="toggle-circle">
                <input className="toggle-input-1" type="radio" aria-label="ToggleSwitch" /> Admin <br />
                <input className="toggle-input-2" type="radio" aria-label="ToggleSwitch" /> App
            </div>
        </div>
    )
}

export default ToggleSwitch;