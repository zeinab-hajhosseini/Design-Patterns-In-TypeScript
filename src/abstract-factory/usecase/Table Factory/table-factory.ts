import { BigTable } from "./big-table";
import { MediumTable } from "./medium-table";
import { SmallTable } from "./small-table";
import { ITable, Table } from "./table";

export class TableFactory {
    static getTable(table: string): ITable{
        if(table == 'BigTable'){
            return new BigTable();
        }
        else if(table == 'MediumTable'){
            return new MediumTable();
        }
        else  if(table == 'SmallTable'){
            return new SmallTable();
        }
        throw new Error('No Table Found');
    }
}