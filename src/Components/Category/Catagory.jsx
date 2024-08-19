import React from 'react'
import { categoryInfos } from './CatagoryFullInfos'
import CatagoryCard from './CatagoryCard'
import classes from './catagory.module.css'


const Catagory = () => {
    return (
        <section className={classes.Catagory__container}>
            {
                categoryInfos.map((infos) => (
                    <CatagoryCard data={infos} />
                ))
            }
        </section>
    )
}

export default Catagory