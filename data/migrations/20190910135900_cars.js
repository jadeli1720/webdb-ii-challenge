
exports.up = function (knex) {
    //Don't forget return!!
    return knex.schema.createTable('cars', tbl => {
        //id, primary key, auto-increment, integer
        tbl.increments()

        //vin: number, unique, required(not null), 17 characters in length?? has to be 17 bigInteger?
        tbl
            .string('vin', 17)
            .unique()
            .notNullable();
        
        //make: string, required

        //model: string, required

        //milage: integer, required

        //transmission type: string, required

        //Title status: string, not required

    })
};

exports.down = function (knex) {
    //Don't forget return!!
};
