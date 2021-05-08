var mongoose= require('mongoose');


//Define schema
var Schema= mongoose.Schema;

var formSchema= new Schema({

    name: String,
    email: String,
    password: String

});

var form= mongoose.model("myForm", formSchema);

module.exports=form;

