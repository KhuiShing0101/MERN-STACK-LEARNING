import { Typography } from "@mui/material";

interface GiftCard{
    name  : String;
    price : Number;
}

interface Props{
    click_count : number
}

const GiftCard = ({click_count}:Props) =>{
    console.log("GiftCard Rendered")
    return <Typography variant="h1">Gift Card {click_count}</Typography>
}


export default GiftCard;