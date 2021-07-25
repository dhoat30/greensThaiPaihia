import React, { useState, useEffect } from "react"
import apiCall from '../functions/apiCall'
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import Gallery from "../Components/GalleryPage/GalleryPage"
// markup
const GalleryPage = () => {
    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages?slug=gallery`
        apiCall(url).then((res) => {
            setDataArray(res)

        })
    }, [])

    const seoArray = dataArray.map(data => {
        return {
            title: data.yoast_head_json.og_title,
            description: data.yoast_head_json.description
        }
    })
    return (
        <Layout>
            {seoArray.length > 0 ?
                <Seo title={seoArray[0].title} description={seoArray[0].description} />
                : null
            }
            <Gallery />
        </Layout>
    )
}

export default GalleryPage
