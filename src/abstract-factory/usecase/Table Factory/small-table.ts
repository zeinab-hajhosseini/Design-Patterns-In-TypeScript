import { Table } from "./table";

export class SmallTable extends Table {
    constructor(){
        super();
        this.name = 'SmallTable';
        this.height = 80;
        this.width = 80;
        this.dipth = 80;
    }
}