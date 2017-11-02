//DataBases
Money = new Mongo.Collection('money');
Goal = new Mongo.Collection('goal');
Unitec = new Mongo.Collection('unitec');

Router.route('/', {
	name: 'login',
	template: 'login'
});
Router.route('/mes', {
	name: 'mes',
	template: 'mes'
});
Router.route('/anyo', {
	name: 'anyo',
	template: 'anyo'
});
Router.route('/config', {
	name: 'config',
	template: 'config'
});
Router.route('/actualizar', {
	name: 'actualizar',
	template: 'actualizar'
});
Router.route('/index', {
	name: 'index',
	template: 'index'
});
moment.updateLocale('en', {
    months : [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
    ]
});
if (Meteor.isClient) {
	ano = Number(moment().format('Y'));
	mes = Number(moment().format('M'));
	usuario = Meteor.userId();

	Template.index.onRendered(function() {
		var ctx = document.getElementById('gIndex').getContext('2d');

		var options = {

	        ///Boolean - Whether grid lines are shown across the chart
	        scaleShowGridLines: false,

	        //String - Colour of the grid lines
	        scaleGridLineColor: "rgba(0,0,0,.05)",

	        //Number - Width of the grid lines
	        scaleGridLineWidth: 1,

	        //Boolean - Whether to show horizontal lines (except X axis)
	        scaleShowHorizontalLines: true,

	        //Boolean - Whether to show vertical lines (except Y axis)
	        scaleShowVerticalLines: true,

	        //Boolean - Whether the line is curved between points
	        bezierCurve: true,

	        //Number - Tension of the bezier curve between points
	        bezierCurveTension: 0,

	        //Boolean - Whether to show a dot for each point
	        pointDot: true,

	        //Number - Radius of each point dot in pixels
	        pointDotRadius: 4,

	        //Number - Pixel width of point dot stroke
	        pointDotStrokeWidth: 1,

	        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	        pointHitDetectionRadius: 20,

	        //Boolean - Whether to show a stroke for datasets
	        datasetStroke: true,

	        //Number - Pixel width of dataset stroke
	        datasetStrokeWidth: 2,

	        //Boolean - Whether to fill the dataset with a colour
	        datasetFill: true,

    	};
    	Tracker.autorun(function () {
    		
	    	var semana1 = 0;
	    	var semana2 = 0;
	    	var semana3 = 0;
	    	var semana4 = 0;
	    	Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
	    		if (i.tipo === 'entrada') {	
		    		if (i.dia > 0 && i.dia <= 8 ) {
		    			semana1 += i.monto;
		    		}
		    		if (i.dia >= 9 && i.dia <= 15 ) {
		    			semana2 += i.monto;
		    		}
		    		if (i.dia >= 16 && i.dia <= 22 ) {
		    			semana3 += i.monto;
		    		}
		    		if (i.dia >= 23 && i.dia <= 31 ) {
		    			semana4 += i.monto;
		    		}
	    		}
	    	});

	    	var data = {
	    		labels: ["Semana-1","Semana-2","Semana-3","Semana-4"],
	    		datasets: [{
	    			label: "My First dataset",
		            fillColor: "rgba(139, 195, 74,.3)",
		            strokeColor: "#4CAF50",
		            pointColor: "#4CAF50",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",
		            data: [semana1, semana2, semana3, semana4]
	    		}, {
		            data: [random(), random(), random(), random()],
		            label: "My First dataset",
		            fillColor: "rgba(220,220,220,0.2)",
		            strokeColor: "rgba(220,220,220,1)",
		            pointColor: "rgba(220,220,220,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",

	    		}]
	    	};
	    	var myLineChart = new Chart(ctx).Line(data, options);
    	});
    	function random() {
		    return Math.floor((Math.random() * 100) + 1);
		}
	});
	Template.index.helpers({
		'mostrarMes': function() {
			return moment().format('MMMM');
		},
		'totalAnualIngreso': function() {
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
		},
		'proyeccion': function() {
			var totalMesActual = 0;
			var totalMesPasado = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					totalMesActual += i.monto;
				}
			});
			Money.find({mes: mes - 1, ano: ano, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					totalMesPasado += i.monto;
				}
			});
			var porcentaje = ((totalMesActual - totalMesPasado) / totalMesPasado) * 100;
			if (porcentaje === Infinity) {
				return '∞';
			}
			else {
				return porcentaje;
			}
		},
		'ahorroMensual': function() {
			var gasto = 0;
			var entrada = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					entrada += i.monto;
				}
				else {
					gasto += i.monto;
				}
			});
			return entrada - gasto;
		},
		'totalAnualEgreso': function() {
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
		},
		'ingresoMensual': function() {
			var total = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;	
		},
		'gastoMensual': function() {
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");;	
		}
	});

	// Toma los valores del formulario de actualización de movimientos y los ingresa a la DB 'Money'
	Template.actualizar.events({
		'submit form': function(e) {
			e.preventDefault();
			var usuario = Meteor.userId();
			var nombreIngreso = $('[name=nombre]').val();
			var fechaIngreso = $('[name=fecha]').val();
			var montoIngreso = Number($('[name=monto]').val());
			var tipo = $('input[name=val1]:checked').val();
			var datos = {
				nombre: nombreIngreso,
				dia: Number(fechaIngreso.split('-')[2]),
				mes: Number(fechaIngreso.split('-')[1]),
				ano: Number(fechaIngreso.split('-')[0]),
				monto: montoIngreso,
				tipo: tipo,
				usuario: usuario
			};
			Money.insert(datos, function(error) {
				if (error) {
					alertify.error(error.reason);
				}
				else {
					$('[name=nombre]').val('');
					$('[name=fecha]').val('');
					$('[name=monto]').val('');
					alertify.success('Actualizado exitosamente');
				}
			});
		}
	});

	Template.salir.events({
		//Salir de la aplicación como administrador 
		'click .salir': function (e) {
			e.preventDefault();
			Meteor.logout();
			Router.go('login');
		}
	});

	Template.login.events({
		'submit form#registro': function(e) {
			e.preventDefault();
			var nombre = $('[name=nombreR]').val();
			var contrasena = String($('[name=contraR]').val());
			Accounts.createUser({
				username: nombre,
				password: contrasena
			}, function(error) {
				if (error) {
					console.log(error.reason);
				}
				else {
					Router.go("index");
				}
			});
		},
		'submit form#login': function(e) {
			e.preventDefault();
			var nombre = $('[name=nombreI]').val();
			var contrasena = $('[name=contraI]').val();
			Meteor.loginWithPassword(nombre, contrasena, function(error) {
				if (error) {
					if (error.reason === "User not found") {
						alertify.error("Usuario no encontrado");
					}
				}
				else {
					Router.go('index');
				}
			});
		},
	});
	Template.config.events({
		'submit form#Goal': function(e) {
			e.preventDefault();
			var meta = Number($('[name=meta]').val());
			var cuota = Number($('[name=cuota]').val());
			var data = {};
			var idReal;
			var verificar = Goal.find({mes: mes, ano: ano, usuario: usuario}).fetch();
			var id = Goal.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				idReal = String(i._id);
			});
			if (verificar == 0) {
				data = {
					mes: mes,
					ano: ano,
					usuario: usuario,
					meta: meta,
					cuota: cuota
				}
				Goal.insert(data, function(error) {
					if (error) {
						alertify.error(error.reason);
					}
					else {
						alertify.success('Actualizado exitosamente');
					}
				});
			}
			else {
				Goal.update({_id: idReal},{$set: {meta: meta, cuota: cuota}}, function(error) {
					if (error) {
						alertify.error(error.reason);
					}
					else {
						alertify.success('Actualizado exitosamente');
					}
				});
			}
			$('[name=cuota]').val('');
			$('[name=meta]').val('');
		},
	});
}