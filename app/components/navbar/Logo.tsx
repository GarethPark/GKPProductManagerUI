"use client";
import {useEffect, useState} from "react";
import Link from "next/link"
import Button from "./Button"

const Logo = () => {
    //update the size of the logo when the screen changes
    const [width, setWidth] = useState(0);

    const updateWidth = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    //change between the logo and the button when the user scrolls
    const [showButton, setShowButton] = useState(false);

    const changeNavButton = () => {
        if (window.scrollY >= 400 && window.innerWidth < 768){
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() =>{
        window.addEventListener("scoll", changeNavButton)
    }, []);

}

export default Logo 