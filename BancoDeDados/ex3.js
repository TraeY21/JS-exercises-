
const database = {
    tables: {
       
    },
    createTable(statment) {
        
        const regexp = /create table ([a-z]+) \((.+)\)/;
        const parsedStatement = statment.match(regexp);
        const tableName = parsedStatement[1];
        this.tables[tableName] = {
                columns: {},
                data: []
        };
        let columns = parsedStatement[2];
        columns = columns.split(", ")
        for (let column of columns){
            column = column.split(" ");
            const name = column[0];
            const type = column[1];
            database.tables[tableName].columns[name] = type;
        }
    },
    execute(statment) {
        if (statment.startsWhith("creat table")) {
            return this.createTable(statment);
        }
    }
};

database.execute("create table author (id number, name string, age number, city string, state string, country string)")

console.log(JSON.stringify(database, undefined, " "));
