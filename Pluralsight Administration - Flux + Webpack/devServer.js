var path = require('path');
var express = require('express');
var webpack = require('webpack');

var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var users = require('./models/users');
var books = require('./models/books');

var config = require('./webpack.config');
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  hot:true,
  noInfo: true,
  historyApiFallback:true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());

mongoose.connect('mongodb://10.207.49.41/users');
var db = mongoose.connection;


app.get('/api/users',function(req,res) {
	users.getUsers(function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.get('/api/books',function(req,res) {
	books.getbooks(function(err, books) {
		if(err) {
			throw err;
		}
		res.json(books);
	})
})

app.post('/api/users',function(req,res) {
	var user = req.body;
	users.addUsers(user,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.post('/api/books',function(req,res) {
	var follower = req.body.follower,
		id = req.body.id;
	books.addFollowers(id,follower,function(err, books) {
		if(err) {
			throw err;
		}
		res.json(books);
	})
})

app.put('/api/users/:id',function(req,res) {
	var id=req.params.id;
	var user = req.body;

	users.updateUsers(id,user,{},function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.put('/api/books/:id',function(req,res) {
	var id=req.params.id;
	var folId = req.body.id;

	books.updateBooks(id,folId,function(err, books) {
		if(err) {
			throw err;
		}
		res.json(books);
	})
})

app.delete('/api/users/:id',function(req,res) {
	var id=req.params.id;
	users.deleteUsers(id,function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/','index.html'));
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
