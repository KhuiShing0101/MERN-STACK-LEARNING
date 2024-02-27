import { Box, Typography } from "@mui/material"

interface Product{
    id   : "number",
    name : "string",
    price: "number",
}

interface Props{
    products : Product[],
}

const Product = ({products}:Props)=>{
    return(
        <Box>{
            products.map((product)=>{
                return(
                    <Typography sx={{ m:5 }} key={product.id}>
                        {product.name} 
                        <br/>
                        {product.price}
                    </Typography>
                )
                })
            }
        </Box>
    )
}

export default Product;