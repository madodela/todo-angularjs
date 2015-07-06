var express = require('express'),
router = express.Router(),
db = require('../dbConnection');

router.param('idTask', function(req, res, next){
	var idTask = req.params.idTask;
	//The id must be a number
	req.idTask = isNaN(idTask) ? null : idTask;
	next();
});

router.route('/')
	.get(function(req, res){
		db.all('SELECT * FROM Task', function(err, row) {
			if(err){
				res.status(400).end();	   
			} else {
				res.json({tasks:row});
			}
		});
		
	})
	.post(function(req, res){		
		db.run("INSERT INTO Task (title, description, overDue, status, priority) VALUES(?,?,?,?,?)",
			[req.body.title, req.body.description, req.body.overDue,
			req.body.status, req.body.priority], function(err, info){
				if(err){
					res.status(400).end();
				} else {
					res.json({success:true, insertedId: this.lastID});
				}	
			});
	});

router.route('/:idTask')
	.get(function(req, res){
		if(req.idTask){
			db.get('SELECT * FROM Task WHERE idTask = ?', req.idTask, function(err, row) {
				if(err){
					res.status(400).end();	   
				} else {
					if(row){
						res.json(row);
					} else {
						res.send(204).end();
					}
				}
			});
		} else {
			res.status(400).end();
		}
		
	})
	.post(function(req, res){
		if(req.idTask){
			var keys = Object.keys(req.body);
			db.run('UPDATE task SET '+keys[0]+' = ? WHERE idTask = ?', [req.body[keys[0]] ,req.idTask], function(err) {
				if(err){
					res.status(400).end();	
				} else {
					res.send("updated");
				}
			}); 
		} else {
			res.status(400).end();
		}
	})
	.delete(function(req, res){
		if(req.idTask){
			db.run('DELETE FROM Task WHERE idTask = ?', req.idTask, function(err) {
				if(err){
					res.status(400).end();	
				} else {
					res.send("deleted");
				}
			});
		} else {
			res.status(400).end();
		}
	});

module.exports = router;