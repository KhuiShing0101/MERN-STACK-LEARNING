import { BaseOption } from "./user";

interface BaseMenu{
    name:string;
    price:number;
}

export interface NewMenu extends BaseMenu{}

export interface Menu extends BaseMenu{
    id:number;
}

export interface NewMenuParams extends BaseMenu,BaseOption{}
