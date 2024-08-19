import React from 'react'
import { IoMdMenu } from "react-icons/io";
import classes from "./Header.module.css"
const LowerHeader = () => {
    return (
        <div className={classes.lower__container}>
            <ul>
                <li>
                    <IoMdMenu />
                    <p>All</p>
                </li>
                <li>Today's deals</li>
                <li>Customer services</li>
                <li>registry</li>
                <li>Gift Cards</li>
                <li>Sell</li>
            </ul>
        </div>
    )
}

export default LowerHeader