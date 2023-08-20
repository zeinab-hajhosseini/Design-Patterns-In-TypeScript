import Table from "./table";
import { FlyWeightFactory } from "./flyweight-factory";

const table = new Table(3, 3);

table.rows[0].columns[0].data = 'zeianb';
table.rows[0].columns[1].data = 'hosseini';
table.rows[0].columns[2].data = '30';

table.rows[1].columns[0].data = 'zahra';
table.rows[1].columns[1].data = 'hosseini';
table.rows[1].columns[2].data = '23';

table.rows[2].columns[0].data = 'ali';
table.rows[2].columns[1].data = 'hosseini';
table.rows[2].columns[2].data = '37';

table.rows[0].columns[0].justify = 1;
table.rows[0].columns[1].justify = 0;
table.rows[0].columns[2].justify = 2;

table.rows[1].columns[0].justify = 1;
table.rows[1].columns[1].justify = 0;
table.rows[1].columns[2].justify = 2;

table.rows[2].columns[0].justify = 1;
table.rows[2].columns[1].justify = 0;
table.rows[2].columns[2].justify = 2;

table.draw();

console.log(
    `FlyweightFactory has ${FlyWeightFactory.getCount()} flyweights`
)