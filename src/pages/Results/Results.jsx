import React, { useState, useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import classes from './results.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { productUrl } from '../../Api/endpoints';
import ProductCard from '../../Components/Product/ProductCard';

const Results = () => {
    const { categoryName } = useParams()
    const [results, setResults] = useState([])
    useEffect(() => {

        axios.get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
                setResults(res.data);
            }).catch((err) => {
                console.log(err);
            })

    }, [])


    return (
        <LayOut>
            <section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <h1 style={{ padding: "30px" }}>Category / {categoryName}</h1>
                <hr />
                <div className={classes.products__container}>
                    {results?.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            renderDesc={false}
                            renderAdd={true} />
                    ))}
                </div>

            </section>
        </LayOut>

    )
}

export default Results