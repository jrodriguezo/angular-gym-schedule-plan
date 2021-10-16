export class Recipe{
    public id: number;
    public name: string;
    public serving_size_g: number;
    //public description: string;
    public proteins: number;
    public carbohydrates: number;
    public fats: number;
    public sugars: number;
    public calories: number;
    //public imagePath: string;

    constructor(id: number, name: string, service_size_g: number, proteins: number, carbohydrates: number, fats: number, sugars: number, calories: number){
        this.id = id;
        this.name = name;
        this.serving_size_g = service_size_g;
        //this.description = description;
        this.proteins = proteins;
        this.carbohydrates = carbohydrates;
        this.fats = fats;
        this.sugars = sugars;
        this.calories = calories;
        //this.imagePath = imagePath;
    }
}
