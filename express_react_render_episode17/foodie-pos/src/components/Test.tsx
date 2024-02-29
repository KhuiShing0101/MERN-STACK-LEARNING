interface HKS {
    name:string 
    age:29
}

interface props{
    hks: HKS;
}

const Test = ({hks}:props) =>{
    return <h1>here Test Component</h1>
}