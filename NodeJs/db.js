const mongoose = require('mongoose');

mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/crud_mongodb", { useNewUrlParser: true }, (err) => {
    if(!err){
        console.log('MongoDB Connection successed...!!!');
    }else{
        console.log('error in db connection:' + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;