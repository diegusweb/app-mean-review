var Persona = require('./modelo/persona');

exports.getPersona = function(req, res){
	Persona.find(function(err, persona){
		if(err)
			res.send(err);

		res.json(pesona);
			
	});
};

exports.setPersona = function(req, res){
	Persona.create(
		{nombre:req.body.nombre, apellido:req.body.apellido, edad:req.body.edad}, 
		function(err, persona){
			if(err)
				res.send(err);

			Persona.find(function(err, persona){
				if(err)
					res.send(err);
				res.json(persona);
			});
		});
};
