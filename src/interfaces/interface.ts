export interface userI{
    name:string;
    email:string;
    password:string;
    rut:string;
    image:string;
    isActive:boolean;
}

export interface eventGet{
    id:string;
    name:string;
    city:string;
    image:string;
    date:string;
    info:string;
    popular:boolean;
}

export interface eventPost{
    name:string;
    city:string;
    image:string;
    date:string;
    info:string;
    popular:boolean;
}

export interface assistGet{
    id:string;
    uEmail:string;
    uRut:string;
    uName:string;
    eId:string;
    eName:string;
    eCity:string;
    eImage:String;
    eDate:string;
    confirm:boolean;
}

export interface assistPost{
    uEmail:string;
    uName:string;
    uRut:string;
    eId:string;
    eName:string;
    eCity:string;
    eImage:String;
    eDate:string;
    confirm:boolean;
}

export interface commentGet{
    id:string;
    text:string;
    uName:string;
    uImage:string;
    uEmail:string;
    eId:string;
}

export interface commentPost{
    text:string;
    uName:string;
    uImage:string;
    uEmail:string;
    eId:string;
}

export interface listGet{
    id:string;
    uEmail:string;
    uName:string;
    uImage:string;
    eId:string;
}

export interface listPost{
    uEmail:string;
    uName:string;
    uImage:string;
    eId:string;
}