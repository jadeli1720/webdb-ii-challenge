
exports.up = function (knex) {
    //Don't forget return!!
    return knex.schema.createTable('cars', tbl => {
        //id, primary key, auto-increment, integer
        tbl.increments('carsId');

        //vin: numbers and letters, unique, required(not null), 17 characters in length
        tbl
            .string('vin')
            .unique()
            .notNullable();
        
        //make: string, required
        tbl
            .string('make')
            .notNullable();

        //model: string, required
        tbl
            .string('model')
            .notNullable();

        //milage: integer, required, up to 6
        tbl
            .integer('milage')
            .notNullable();

        //transmission type: string, required
        tbl
            .string('transType')
            .notNullable();

        //Title status: string, not required
        tbl.string('titleStatus')

    })
};

exports.down = function (knex) {
    //Don't forget return!!
    return knex.schema.dropTableIfExists('cars')
};
