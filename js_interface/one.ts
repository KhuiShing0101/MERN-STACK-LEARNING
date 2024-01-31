console.log("tsc")
    interface Menu{
        name:string;
        price:number;
        discount:number;
        description:string[];
    }

    interface Drink{
        name:string;
        price:number;
        discount:number;
        description:string[];
    };

    interface Burger{
        name:string;
        price:number;
        discount:number;
        description ?:string[];
    };


    const fastFood = (a :()=>Burger)=>{
        const burger = a();
        return burger;
    }