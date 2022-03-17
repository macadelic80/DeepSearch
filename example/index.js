console.log("c charge")
/*
simple string
simple number
handle booleans
handle categories
handle boolean
handle addresses
*/
const templates = {
	"car": {
		"brand": {
			type: "string",
			displayName: "Brand"
		},
		"model": {
			type: "string",	
			displayName: "Model"
		},
		"type": {
			type: "category",
			displayName: "Type",
			list: ["sedan", "hatchback", "suv", "hahalol"],
		},
		"manufactureDate": {
			type: "date",
			displayName: "Manufacture Date",
		},
		"isNew": {
			type: "boolean",
			displayName: "Is New",
		},
		"price": {
			type: "number",
			displayName: "Price",
		},
		"color": {
			type: "string",
			displayName: "Color",
		},
		"isAvailable": {
			type: "boolean",
			displayName: "Is Available",
		},
	},
	"person": {
		"name": {
			type: "string",
			displayName: "Name",
		},
		"lastName": {
			type: "string",
			displayName: "Last Name",
		},
		"age": {
			type: "number",
			displayName: "Age",
		},
		"isMale": {
			type: "boolean",
			displayName: "Is",
		},
		"address": {
			type: "address",
			displayName: "Address",
		},
	},
}
const data = {
	"car": [
		{
			"brand": "BMW",
			"model": "X5",
			"type": "sedan",
			"manufactureDate": "2020-01-01",
			"isNew": true,
			"price": 100,
			"color": "red",
			"isAvailable": true,
		},
		{
			"brand": "Audi",
			"model": "A4",
			"type": "suv",
			"manufactureDate": "2020-01-01",
			"isNew": true,
			"price": 100,
			"color": "red",
			"isAvailable": true,
		},
		{
			"brand": "Audi",
			"model": "A4",
			"type": "suv",
			"manufactureDate": "2020-01-01",
			"isNew": true,
			"price": 100,
			"color": "red",
			"isAvailable": true,
		}
	],
	"person": [
		{
			"name": "John",
			"lastName": "Doe",
			"age": 30,
			"isMale": true,
			"address": {
				"street": "Street",
				"city": "City",
				"state": "State",
				"zip": "Zip",
			},
		},
		{
			"name": "Jane",
			"lastName": "Doe",
			"age": 30,
			"isMale": false,
			"address": {
				"street": "Street",
				"city": "City",
				"state": "State",
				"zip": "Zip",
			},
		},
	]
}

const start = () => {
	const ds = new DeepSearch("#input", {
		placeholder: "Deeps",
	});
	ds.setData(data.car);
	ds.setTemplate(templates.car);
	ds.render();
	console.log(ds);
}
document.addEventListener("DOMContentLoaded", function (event) {
	start();
});
