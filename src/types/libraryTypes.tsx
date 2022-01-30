export interface IAuthor{
    name:string
}

export interface IBook{
    name:string,
    isbn:number,
    author:string,
}

export interface AuthorsInDropDown {
    value: string,
    label: string,
}