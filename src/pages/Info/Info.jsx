import { useState } from "react"

import "./Info.css"
import { infoItems } from "../../data/infoItems.jsx"

export const Info = () => {
    const [openSection, setOpenSection] = useState(null)

    return (
        <div className="main">

            <hr />

                {infoItems.map((item) => {
                    
                const isOpen = openSection === item.id

                return (
                    <div className={isOpen ? "item item-open" : "item"} key={item.id}>
                    
                    <h2
                        className="h2-info"
                        onClick={() =>
                        setOpenSection(prev => prev === item.id ? null : item.id)
                        }
                    >
                        {item.name}
                    </h2>

                    {isOpen && item.text && (
                        <p className="p-info">{item.text}</p>
                    )}

                    <hr />
                    </div>
                )
                })}

        </div>
    )
}