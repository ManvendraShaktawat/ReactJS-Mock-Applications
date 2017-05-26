var mongoose = require('mongoose');
var bookschema = mongoose.Schema({
	book:'string',
	followers:[{
		name:'string',
		year:'string'
	}]
})

var books =module.exports.books = mongoose.model('books',bookschema);

module.exports.getbooks= function(callback){
	books.find(callback);
}

module.exports.addFollowers= function(id,obj,callback){
	books.findByIdAndUpdate(id, {$push:{'followers':obj}},callback);
}

module.exports.updateBooks= function(id,objId,callback){
	books.findByIdAndUpdate(id, {$pull:{'followers':{'_id':objId}}},callback);
}