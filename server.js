// ExpressJS Setup
const express = require('express');
const app = express();
var bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

 // Hyperledger Bridge
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname, 'connection.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const ccp = JSON.parse(ccpJSON);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// ejs view template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Index page
app.get('/', function (req, res) {
    res.render('index', { title: "Main Page", activate: "index"});
});

// Qeury all cars page
app.get('/api/queryallcars', function (req, res) {
    res.render('query', { title: "Query", activate: "query" });
});

app.get('/api/query', async function (req, res) {
     // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting

	
	
	
	
	
	
	
	

        var obj = JSON.parse(result)
        res.json(obj)

        // FIXME:
        // res.status(200).json({response: result.toString()});
        // res.end(JSON.stringify(result));

        // res.status(200).send(obj);
        // res.end(JSON.stringify(result));
});

// Query car handle
// localhost:8080/api/querycar?carno=CAR5
app.get('/api/querycars/', async function (req, res) {
    // create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
    try {
	var carno = req.query.carno;
	console.log(carno);

       
	    
	    
	    
	    
	    
	    
	    
	    
	    

        console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
        res.status(200).json({response: result.toString()});
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        res.status(400).json(error);
    }
});

// Create car page
app.get('/api/createcar', function (req, res) {
    res.render('createcar', { title: "Create Car", activate: "createcar"  });
});
// Create car handle
app.post('/api/createcar/', async function (req, res) {
    try {
	var carno = req.body.carno;
	var colour = req.body.colour;
	var make = req.body.make;
	var model = req.body.model;
	var owner = req.body.owner;


	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    
	    

        // Disconnect from the gateway.
        await gateway.disconnect();

        res.status(200).json({response: 'Transaction has been submitted'});

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        res.status(400).json(error);
    }   

});

// Change car owner page
app.get('/api/changeowner', function (req, res) {
    res.render('changeowner', { title: "Change Owner", activate: "changeowner" });
});

// Change car owner handle
app.post('/api/changeowner/', async function (req, res) {
    try {
        var carno = req.body.carno;
        var owner = req.body.owner;


        // Disconnect from the gateway.
        await gateway.disconnect();
        res.status(200).json({response: 'Transaction has been submitted'});

    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        res.status(400).json(error);
    }   
});

// server start
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
