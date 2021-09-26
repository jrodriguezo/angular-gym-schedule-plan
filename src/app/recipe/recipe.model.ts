export class Recipe{
    public id: number;
    public name: string;
    public description: string;
    public proteins: number;
    public carbohydrates: number;
    public fats: number;
    public imagePath: string;

    constructor(id:number, name: string, description: string, proteins: number, carbohydrates: number, fats: number, imagePath: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.proteins = proteins;
        this.carbohydrates = carbohydrates;
        this.fats = fats;
        this.imagePath = imagePath;
    }
}