export class Valute{

    private coinName:string;
    private coinValue:number;
    

    constructor (coinName:string,coinValue:number){
        this.coinName = coinName;
        this.coinValue = coinValue;
    }

    public getCoinName():string{
        return this.coinName;
    }
    public getCoinValue():number{
        return this.coinValue;
    }

    public setCoinValue(coinValue:number):void{
        this.coinValue = coinValue;
    }
}

export class Actions{
    private fromCoinName: string;
    private fromCoinValue: number;
    private toCoinName: string;
    private toCoinValue : number;
    private exchangeVar:number;
    private numberOfDeal:number;
    private result:number;

    constructor (fromCoinName:string,fromCoinValue:number,toCoinName:string,toCoinValue:number,exchangeVar:number,numberOfDeal:number,result:number ){
      this.result = result;
        this.numberOfDeal = numberOfDeal;
        this.fromCoinName = fromCoinName;
        this.fromCoinValue = fromCoinValue;
        this.toCoinName = toCoinName;
        this.toCoinValue = toCoinValue;
        this.exchangeVar = exchangeVar;
    }

    public getFromCoinName():string{
        return this.fromCoinName;
    }
    public getFromCoinValue():number{
        return this.fromCoinValue;
    }
    public getToCoinName():string{
        return this.toCoinName;
    }
    public getToCoinValue():number{
        return this.toCoinValue;
    }
    public getExchangeVar():number{
        return this.exchangeVar;
    }
    public getnNumberOfDeal():number{
        return this.numberOfDeal;
    }
    public getResult():number{
        return this.result;
    }

    public setExchangeVar(exchangeVar:number):void{
        this.exchangeVar = exchangeVar;
    }
    public setNumberOfDeal(numberOfDeal:number):void{
        this.numberOfDeal = numberOfDeal;
    }
}