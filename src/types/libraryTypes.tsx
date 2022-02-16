export interface IAuthor{
    name:string
}

export interface IBook{
    name:string,
    isbn:string,
    author:string,
}

export interface AuthorsInDropDown {
    value: string,
    label: string,
}