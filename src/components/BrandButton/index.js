import { Segment, Image } from "semantic-ui-react"

import useImage from "../../hooks/useImage"
import './style.css'

const BrandButton = ({brand, onClick, selected}) => {
    console.log(brand.name + ' is selected ' + selected)
    const {logo, id, name} = brand
    const {loading, error, image} = useImage(logo)
    return (
        <Segment className={`button-container ${(selected) ? 'selected' : ''} `} onClick={onClick}>
            { (loading) ? 'loading' : (<Image centered src={image} verticalAlign="middle" className='button-image'  />) }
        </Segment>
    )
}

export default BrandButton