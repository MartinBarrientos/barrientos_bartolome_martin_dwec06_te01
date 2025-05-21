
export class Post {
    //atributos
    public title : string;
    public id : number;
    public userId : number;
    public body : string;
    public image : string;

    //constructor
    constructor(title: string, id: number, userId: number, body: string, image : string){
        this.title = title;
        this.id = id;
        this.userId = userId;
        this.body = body;
        this.image = image;
    }
    //metodos
    
}
