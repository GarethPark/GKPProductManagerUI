"use client"

import { useState } from "react"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default Navigation