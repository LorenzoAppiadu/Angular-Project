export class Recipe{
    name: string
    description: string
    imagepath: string

    constructor(name:string, desc:string, img: string){
        this.name = name
        this.description = desc
        this.imagepath = img
    }
}