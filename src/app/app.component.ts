import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(){
		this.printingMessage('sadhana');
	}
  title = 'Angular 4 Application';
  clickedcompany='';
  clickednumber= 0;
  clickedperson={};
  companies = ["Hooper Labs","IBM","Infosys","HSBC","TCS","Tech Mahindra"];
  numbers = [22,33,44,55,66,77];
  details = {name:'sadhana', number:22};
  pdetails = {name:'sreekanth',number:33};
  classmates =[
  {name:'sreekanth1',number:331},
  {name:'sreekanth2',number:332},
  {name:'sreekanth3',number:333}, 
  {name:'sreekanth4',number:334},
  {name:'sreekanth5',number:335},
  {name:'sreekanth6',number:336}];
  
  printingMessage(name){
  	console.log('Hello ' + name);
  }
  printingCompany(cmpnyname){
  	this.clickedcompany= cmpnyname;
  	console.log('Haii ' + cmpnyname);
  }
  printingNumber(number){
  	this.clickednumber= number;
  	console.log(number);
  }
  printingMember(member){
  	this.clickedperson=member;
  	console.log(member.name+' - '+member.number);
  }
 


}

