import React from 'react'

import ChickenMains from './SubCategories/ChickenMains'
import GoatMains from './SubCategories/GoatMains'
import LambBeefMains from './SubCategories/LambBeefMains'
import SeafoodMains from './SubCategories/SeafoodMains'
import VegetarianMains from './SubCategories/VegetarianMains'

function Mains(props) {
    return (
        <React.Fragment>
            {
                props.showCategory ? <div >

                    <ChickenMains />
                    <LambBeefMains />
                    <GoatMains />
                    <SeafoodMains />
                    <VegetarianMains />

                </div> : null
            }

        </React.Fragment>

    )
}

export default Mains
