import { useState } from 'react'
import { Grid, Button } from 'semantic-ui-react'

import brandsList from './brandsList.json'
import BrandButton from '../BrandButton'

const BrandsButtons = ({onCreateOrder}) => {
    const [selectedBrands, setSelectedBrands] = useState([])
    const handleOrderClick = () => {
        onCreateOrder(selectedBrands)
        setSelectedBrands([])
    }

    
    const handleOrderChange = (brand) => {
        //try to remove, if didn't remove, then add
        const removedBrandFromSelection = selectedBrands.filter(curBrand => curBrand !== brand)
        if (removedBrandFromSelection.length !== selectedBrands.length) {
            setSelectedBrands(removedBrandFromSelection)
        } else {
            setSelectedBrands([...selectedBrands, brand])
        }
        
    }
    return (
        <Grid stackable columns={4}>
            {brandsList.map(brand => (
                <Grid.Column key={brand.id}>
                    <BrandButton 
                        brand={brand}
                        onClick={() => handleOrderChange(brand)}
                        selected={selectedBrands.indexOf(brand) !== -1}
                    />
                </Grid.Column>
            ))}
            <Grid.Column width={14} textAlign="center">
                <Button primary size="massive" onClick={handleOrderClick} disabled={selectedBrands.length ===0}> Order</Button>
            </Grid.Column>
        </Grid>
    )
}

export default BrandsButtons