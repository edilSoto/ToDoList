export class Todo {

    constructor(tarea) {
        
        this.tarea = tarea;
        
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();  
    }

    static fromJson({id, tarea, completado, creado}){

        const tempTodo = new Todo(tarea);

        this.id - id;
        this.completado = completado;
        this.creado = creado;

        return tempTodo;
    }
}