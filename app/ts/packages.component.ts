import {Component} from 'angular2/core';

@Component({
	selector: 'packages',
	templateUrl: 'app/ts/packages.component.html',
	styles: [`
	* {
		box-sizing: border-box;
	}

	.columns {
		float: left;
		width: 33.3%;
		padding: 8px;
	}

	.price {
		list-style-type: none;
		border: 1px solid #eee;
		margin: 0;
		padding: 0;
		-webkit-transition: 0.3s;
		transition: 0.3s;
	}

	.price:hover {
		box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
	}

	.price .header {
		background-color: #111;
		color: white;
		font-size: 25px;
	}

	.price li {
		border-bottom: 1px solid #eee;
		padding: 20px;
		text-align: center;
		color: white;
	}

	.price .grey {
		background-color: #eee;
		font-size: 20px;
		color: black;
	}

	.button {
		background-color: #4CAF50;
		border: none;
		color: white;
		padding: 10px 25px;
		text-align: center;
		text-decoration: none;
		font-size: 18px;
	}

	@media only screen and (max-width: 600px) {
		.columns {
			width: 100%;
		}
	}
    `] 
})

export class PackagesComponent {
	
}