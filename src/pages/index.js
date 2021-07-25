import React, { useState, useEffect } from "react"
import apiCall from '../functions/apiCall'
import Layout from "../Components/Layout"
import Seo from "../Components/seo"
import Home from "../Components/Home/Home"
// markup
const IndexPage = () => {
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages?slug=home-page`
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
      <Home />
    </Layout>
  )
}

export default IndexPage
