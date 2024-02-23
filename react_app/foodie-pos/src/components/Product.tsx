import { Box, Typography } from "@mui/material"

interface Product{
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
                    <Typography>{product.name} 
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