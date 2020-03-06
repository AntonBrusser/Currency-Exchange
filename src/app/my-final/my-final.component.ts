import { Component, OnInit } from '@angular/core';
import { Valute , Actions } from './classes';
import { from } from 'rxjs';

@Component({
  selector: 'app-my-final',
  templateUrl: './my-final.component.html',
  styleUrls: ['./my-final.component.css']
})
export class MyFinalComponent implements OnInit {

public coinNameInput:string;
public coinVlueInput:number;
public exchangeFromNameInput:string;
public exchangeToNameInput:string;
public exchangeNumber:number;
public arrOfAllCoins: Valute[] = new Array();
public arrOfAllMyActions: Actions[] = new Array();

public convertFromRate:number;
public convertToRate:number; 
public result:number;

public i:number;
public j:number;
public listIndex:number;
public chackName:string;
public x:string;
public counter:number;
public flag:boolean;

public Name:string;
public Value:number;

public page1:boolean;
public page2:boolean;
public logDiv:boolean;

public startB:boolean;

public isFromCoinEmpty:boolean;
public isTCoinEmpty:boolean;
public isConvertInputEmpty:boolean;
public isTypeInputEmpty:boolean;
public isValueInputEmpty:boolean;
public UpdateB:boolean;






  constructor() { }

 public turnToPage1():void{
   this.page2 = false;
   this.page1 = true;
 }

 public turnToPage2():void{
  this.page1 = false;
  this.page2 = true;
}

public showLogDiv():void{
  this.logDiv = !this.logDiv;
}

public goToFacebook():void{
  window.location.href="http://www.facebook.com";
}

public enableStart2():void{ 
    if(this.exchangeFromNameInput == undefined || this.exchangeToNameInput == undefined || this.exchangeNumber == null ){
              this.startB = true;
    }
    else{
      this.startB = false;
    }
}
public enableStart3():void{
        if(this.exchangeFromNameInput == undefined || this.exchangeToNameInput == undefined || this.exchangeNumber == null ){
                this.startB = true;
      }
      else{
        this.startB = false;
      }
  }
public enableStart():void{  
  if(this.exchangeFromNameInput == undefined || this.exchangeToNameInput == undefined || this.exchangeNumber == null){
    
    this.startB = true;
  }
  else{
    this.startB = false;
  }
}


public convert():void{ debugger;
  this.counter ++;
  for (this.i = 0; this.i<this.arrOfAllCoins.length;this.i++){ 
    if (this.exchangeFromNameInput == this.arrOfAllCoins[this.i].getCoinName()){
      this.convertFromRate = this.arrOfAllCoins[this.i].getCoinValue();

    }
    if (this.exchangeToNameInput == this.arrOfAllCoins[this.i].getCoinName()){
      this.convertToRate = this.arrOfAllCoins[this.i].getCoinValue();
  }
}

  this.result = this.convertFromRate / this.convertToRate * this.exchangeNumber;   

  this.arrOfAllMyActions.push(new Actions(this.exchangeFromNameInput, this.convertFromRate , this.exchangeToNameInput , this.convertToRate , this.exchangeNumber,this.counter,this.result));
  
  this.convertFromRate = 0;
  this.convertToRate = 0;
  this.isConvertInputEmpty = false;
  this.exchangeNumber = null;
  this.startB = true;
  alert (this.result);
}


public enableUpdate1():void{

    if (this.coinNameInput == "" || this.coinVlueInput ==null){
      this.UpdateB = true;
    }
    else{
      this.UpdateB = false;
    }

}
public enableUpdate2():void{ debugger;
  
      if (this.coinNameInput == "" || this.coinVlueInput ==null){
        this.UpdateB = true;
      }
      else{
        this.UpdateB = false;
      }
}






  public updateLogOfCoins():void{debugger;
    if( this.coinNameInput >'z' || this.coinNameInput < 'A' || this.coinVlueInput <= 0){
      alert ("the coin name must conatin only letters and the value must be bigger then Zero")
    }
    else{
    

    this.chackName = this.coinNameInput;
    this.chackName = this.chackName.toUpperCase();
        for(this.i=0;this.i<this.arrOfAllCoins.length;this.i++){
      this.x = this.arrOfAllCoins[this.i].getCoinName();
      if (this.chackName == this.x   ){
        this.arrOfAllCoins[this.i].setCoinValue(this.coinVlueInput);
        this.flag = true;
        break;
          }
        }  
        if (this.flag == false){
          this.arrOfAllCoins.push(new Valute(this.chackName,this.coinVlueInput));
        }
        this.flag = false;
      }
      this.UpdateB = true;
      this.isTypeInputEmpty = false;
      this.isValueInputEmpty = false;
      this.coinNameInput = "";
      this.coinVlueInput = null;
    }


  ngOnInit() {
this.page1 = true;
this.page2 = false;

this.startB = true;

this.i = 0;
this.j = 0;
this.flag = false;
this.logDiv = false;

this.arrOfAllCoins.push(new Valute("DOLLAR",4));
this.arrOfAllCoins.push(new Valute("EURO",5));
this.arrOfAllCoins.push(new Valute("SHEKEL",1));

this.counter = 0;
this.isFromCoinEmpty = false;
this.isTCoinEmpty = false;
this.isConvertInputEmpty = false;
this.UpdateB = true;
this.isTypeInputEmpty = false;
this.isValueInputEmpty = false;




  }

}
