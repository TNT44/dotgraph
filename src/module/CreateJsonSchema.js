var GenerateSchema = require('generate-schema')

function createUnSchema() {

    // Capture Schema Output
    var schema = GenerateSchema.json('Product', [
        {
            "id": 2,
            "name": "An ice sculpture",
            "price": 12.50,
            "tags": ["cold", "ice"],
            "dimensions": {
                "length": 7.0,
                "width": 12.0,
                "height": 9.5
            },
            "warehouseLocation": {
                "latitude": -78.75,
                "longitude": 20.4
            }
        },
        {
            "id": 3,
            "name": "A blue mouse",
            "price": 25.50,
            "dimensions": {
                "length": 3.1,
                "width": 1.0,
                "height": 1.0
            },
            "warehouseLocation": {
                "latitude": 54.4,
                "longitude": -32.7
            }
        }
    ])

    return schema;
}

function createJsonSchema(nom, objson) {

    // Capture Schema Output
    var schema = GenerateSchema.json(nom, objson);
    return schema;
}

module.exports = {
    createUnSchema: createUnSchema,
    createJsonSchema: createJsonSchema
};