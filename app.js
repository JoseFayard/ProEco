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
	options = {

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
	Template.anyo.onRendered(function() {
		var ctx = document.getElementById('ctxAno').getContext('2d');
	    	Tracker.autorun(function () {
	    		var ano = Number(moment().format('Y'));
				var mes = Number(moment().format('M'));
				var usuario = Meteor.userId();
	    		
		    	var EneroE = 0;
		    	var FebreroE = 0;
		    	var MarzoE = 0;
		    	var AbrilE = 0;
		    	var MayoE = 0;
		    	var JunioE = 0;
		    	var JulioE = 0;
		    	var AgostoE = 0;
		    	var SeptiembreE = 0;
		    	var OctubreE = 0;
		    	var NoviembreE = 0;
		    	var DiciembreE = 0;

		    	var EneroS = 0;
		    	var FebreroS = 0;
		    	var MarzoS = 0;
		    	var AbrilS = 0;
		    	var MayoS = 0;
		    	var JunioS = 0;
		    	var JulioS = 0;
		    	var AgostoS = 0;
		    	var SeptiembreS = 0;
		    	var OctubreS = 0;
		    	var NoviembreS = 0;
		    	var DiciembreS = 0;
		    	

		    	Money.find({ano: ano, usuario: usuario}).map(function(i) {
		    		if (i.tipo === 'entrada') {	
			    		if (i.mes === 1 ) {
			    			EneroE += i.monto;
			    		}
			    		else if (i.mes === 2 ) {
			    			FebreroE += i.monto;
			    		}
			    		else if (i.mes === 3 ) {
			    			MarzoE += i.monto;
			    		}
			    		else if (i.mes === 4 ) {
			    			AbrilE += i.monto;
			    		}
			    		else if (i.mes === 5 ) {
			    			MayoE += i.monto;
			    		}
			    		else if (i.mes === 6 ) {
			    			JunioE += i.monto;
			    		}
			    		else if (i.mes === 7 ) {
			    			JulioE += i.monto;
			    		}
			    		else if (i.mes === 8 ) {
			    			AgostoE += i.monto;
			    		}
			    		else if (i.mes === 9 ) {
			    			SeptiembreE += i.monto;
			    		}
			    		else if (i.mes === 10 ) {
			    			OctubreE += i.monto;
			    		}
			    		else if (i.mes === 11 ) {
			    			NoviembreE += i.monto;
			    		}
			    		else if (i.mes === 12 ) {
			    			DiciembreE += i.monto;
			    		}

		    		}
		    	});

		    	Money.find({ano: ano, usuario: usuario}).map(function(i) {
		    		if (i.tipo === 'salida') {	
			    		if (i.mes === 1 ) {
			    			EneroS += i.monto;
			    		}
			    		else if (i.mes === 2 ) {
			    			FebreroS += i.monto;
			    		}
			    		else if (i.mes === 3 ) {
			    			MarzoS += i.monto;
			    		}
			    		else if (i.mes === 4 ) {
			    			AbrilS += i.monto;
			    		}
			    		else if (i.mes === 5 ) {
			    			MayoS += i.monto;
			    		}
			    		else if (i.mes === 6 ) {
			    			JunioS += i.monto;
			    		}
			    		else if (i.mes === 7 ) {
			    			JulioS += i.monto;
			    		}
			    		else if (i.mes === 8 ) {
			    			AgostoS += i.monto;
			    		}
			    		else if (i.mes === 9 ) {
			    			SeptiembreS += i.monto;
			    		}
			    		else if (i.mes === 10 ) {
			    			OctubreS += i.monto;
			    		}
			    		else if (i.mes === 11 ) {
			    			NoviembreS += i.monto;
			    		}
			    		else if (i.mes === 12 ) {
			    			DiciembreS += i.monto;
			    		}
		    		}
		    	});

		    	var data = {
		    		labels: [
		    			"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"
		    		],
		    		datasets: [{
		    			label: "My First dataset",
			            fillColor: "rgba(139, 195, 74, 0.15)",
			            strokeColor: "#4CAF50",
			            pointColor: "#4CAF50",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(220,220,220,1)",
			            data: [EneroE, FebreroE, MarzoE, AbrilE, MayoE, JunioE, JulioE, AgostoE, SeptiembreE, OctubreE, NoviembreE, DiciembreE],
		    		}, {
			            data: [EneroS, FebreroS, MarzoS, AbrilS, MayoS, JunioS, JulioS, AgostoS, SeptiembreS, OctubreS, NoviembreS, DiciembreS],
			            label: "My First dataset",
			            fillColor: "rgba(243, 156, 18, 0.15)",
			            strokeColor: "rgba(230, 126, 34,1.0)",
			            pointColor: "rgba(230, 126, 34,1.0)",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(220,220,220,1)",

		    		}]
		    	};
		    	var myLineChart = new Chart(ctx).Bar(data, options);
	    	});
	});

	Template.index.onRendered(function() {
		var ctx = document.getElementById('gIndex').getContext('2d');
	    	Tracker.autorun(function () {
	    		var ano = Number(moment().format('Y'));
				var mes = Number(moment().format('M'));
				var usuario = Meteor.userId();
	    		
		    	var semana1 = 0;
		    	var semana2 = 0;
		    	var semana3 = 0;
		    	var semana4 = 0;

		    	var semana1Pasada = 0;
		    	var semana2Pasada = 0;
		    	var semana3Pasada = 0;
		    	var semana4Pasada = 0;

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

		    	Money.find({mes: mes - 1, ano: ano, usuario: usuario}).map(function(i) {
		    		if (i.tipo === 'entrada') {	
			    		if (i.dia > 0 && i.dia <= 8 ) {
			    			semana1Pasada += i.monto;
			    		}
			    		if (i.dia >= 9 && i.dia <= 15 ) {
			    			semana2Pasada += i.monto;
			    		}
			    		if (i.dia >= 16 && i.dia <= 22 ) {
			    			semana3Pasada += i.monto;
			    		}
			    		if (i.dia >= 23 && i.dia <= 31 ) {
			    			semana4Pasada += i.monto;
			    		}
		    		}
		    	});

		    	var data = {
		    		labels: ["Semana-1","Semana-2","Semana-3","Semana-4"],
		    		datasets: [{
		    			label: "My First dataset",
			            fillColor: "#fff",
			            strokeColor: "#4CAF50",
			            pointColor: "#4CAF50",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "rgba(220,220,220,1)",
			            data: [semana1, semana2, semana3, semana4]
		    		}, {
			            data: [semana1Pasada, semana2Pasada, semana3Pasada, semana4Pasada],
			            label: "My First dataset",
			            fillColor: "#fff",
			            strokeColor: "#e67e22",
			            pointColor: "#e67e22",
			            pointStrokeColor: "#fff",
			            pointHighlightFill: "#fff",
			            pointHighlightStroke: "#e67e22",

		    		}]
		    	};
		    	var myLineChart = new Chart(ctx).Line(data, options);
	    	});
	});
	Template.index.helpers({
		'mostrarMes': function() {
			return moment().format('MMMM');
		},
		'totalAnualIngreso': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'proyeccion': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
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
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
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
			return (entrada - gasto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'totalAnualEgreso': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'ingresoMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			Session.set('totalMensualIngreso', total);	
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'gastoMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
		},
		'metaMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var meta = Goal.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				return i.meta;
			});
			Session.set('meta', meta);
			return meta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'porcentajeMetaMensual': function() {
			var meta = Number(Session.get('meta'));
			var ingresoMensualTotal = Number(Session.get('totalMensualIngreso'));
			return (ingresoMensualTotal * 100) / meta;
		},
		'UNITEC': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var unitec = Goal.find({mes: mes, ano: ano, usuario: usuario}).map(function(i){
				return i.cuota * 3;
			});
			return unitec.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	});
	Template.mes.helpers({
		'mostrarMes': function() {
			return moment().format('MMMM');
		},
		'proyeccion': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
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
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
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
			return (entrada - gasto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'ingresoMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			Session.set('totalMensualIngreso', total);	
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'gastoMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");	
		},
		'metaMensual': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var meta = Goal.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				return i.meta;
			});
			Session.set('meta', meta);
			return meta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'porcentajeMetaMensual': function() {
			var meta = Number(Session.get('meta'));
			var ingresoMensualTotal = Number(Session.get('totalMensualIngreso'));
			return (ingresoMensualTotal * 100) / meta;
		},
		'listaMovimientos': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var movimientos = Money.find({mes: mes, ano: ano, usuario: usuario}).fetch();
			return movimientos;
		},
		'cuotaUnitec': function() {
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
			var cuota = Goal.find({mes: mes, ano: ano, usuario: usuario}).map(function(i) {
				return i.cuota;
			});
			return cuota.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	});
	Template.anyo.helpers({
		'mostrarAno': function() {
			return moment().format('Y');
		},
		'proyeccion': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var totalMesActual = 0;
			var totalMesPasado = 0;
			Money.find({ ano: ano, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					totalMesActual += i.monto;
				}
			});
			Money.find({ ano: ano - 1, usuario: usuario}).map(function(i) {
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
		'totalAnualEgreso': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'salida' ) {
					total += i.monto;
				}
			});
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'totalAnualIngreso': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var total = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if ( i.tipo === 'entrada' ) {
					total += i.monto;
				}
			});
			Session.set('totalAnualIngreso', total);
			return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'ahorroAnual': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var gasto = 0;
			var entrada = 0;
			Money.find({ano: ano, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					entrada += i.monto;
				}
				else {
					gasto += i.monto;
				}
			});
			return (entrada - gasto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'ahorroAnualPasado': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var gasto = 0;
			var entrada = 0;
			Money.find({ano: ano - 1, usuario: usuario}).map(function(i) {
				if (i.tipo === 'entrada') {
					entrada += i.monto;
				}
				else {
					gasto += i.monto;
				}
			});
			return (entrada - gasto).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'metaAnual': function() {
			var ano = Number(moment().format('Y'));
			var usuario = Meteor.userId();
			var meta = Goal.find({ ano: ano, usuario: usuario}).map(function(i) {
				return i.meta;
			});
			Session.set('metaAnual', meta);
			return meta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		'porcentajeMetaAnual': function() {
			var meta = Number(Session.get('metaAnual'));
			var ingresoMensualTotal = Number(Session.get('totalAnualIngreso'));
			return (ingresoMensualTotal * 100) / meta;
		},
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
					else {
						alertify.error(error.reason);
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
			var ano = Number(moment().format('Y'));
			var mes = Number(moment().format('M'));
			var usuario = Meteor.userId();
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