import React from 'react'
import Header from './Header/Header'
import "./Layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer/Footer'
import SimpleReactLightbox from 'simple-react-lightbox'
function Layout(props) {
    return (
        <React.Fragment>
            <SimpleReactLightbox>
                <Header></Header>
                {props.children}
                <Footer />
            </SimpleReactLightbox>

        </React.Fragment>
    )
}

export default Layout
