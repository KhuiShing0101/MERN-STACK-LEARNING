interface BaseOption{
    name:string;
    price:number;
}

export interface Menu extends BaseOption{
    id:number;
}

export interface NewMenuParams extends BaseOption{}
