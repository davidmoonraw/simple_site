// Get db to write local script
conn  = new Mongo();
// name defined in .env file
db = conn.getDB('portfolio');

// Create primary collections 
db.createCollection("form",{});


// Add sample data to collection
db.form.insertMany([
    {
        'email': 'sample@one.net',
        'text': 'say hi and goodbye.',
    },
    {
        'email': 'sample@two.net',
        'text': 'Important tasks.',
    }
]);