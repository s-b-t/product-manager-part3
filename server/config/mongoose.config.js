const mongoose = require('mongoose');
const db = "productdb"

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log(`⚡️${db} CONNECTION HAS BEEN ESTABLISHED! ⚡️`))
    .catch(err => console.log("⛔️ THERE WAS AN ERROR!", err))
