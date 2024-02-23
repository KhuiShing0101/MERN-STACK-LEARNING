import { Box, Button, Typography } from "@mui/material";
import GiftCard from "./components/GiftCard";
import { useState } from "react";
import Product from "./components/Product";

const App = () => {
  console.log("parent Render")

  // const [num,stageNum] = useState<number>(1);
  const [products,stagingProduct] = useState<Product[]>([]);
  const getProducts = async ()=>{
    const response = await fetch('http://localhost:5000/')
    const products = await response.json();
    console.log(products);
    stagingProduct(products)
  }

  // const clicked = ()=>{
  //   const addedNum = num + 1
  //   stageNum(addedNum);
  // }

  return (
    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
      }}
    >

      {/* <Typography variant="h1">{num}</Typography>
      <GiftCard click_count={num}/> */}

      <Product products={products}/>

      <Button variant="contained" onClick={getProducts}>Click Me</Button>
    </Box>
  );

}

export default App;
