import { Component, OnInit } from '@angular/core';
import { stock } from '../Models/stock';
import { HttpClient } from '@angular/common/http';
import { StockService } from '../stock.service';
import { ActivatedRoute } from '@angular/router';
import { FinnhubService } from '../finnhub.service';
import { Observable, forkJoin, map } from 'rxjs';
import { priceQuote } from '../Models/priceQuote';

@Component({
  selector: 'app-viewstocks',
  templateUrl: './viewstocks.component.html',
  styleUrls: ['./viewstocks.component.css']
})
export class ViewstocksComponent implements OnInit{
  result!: any;
    stocks:Observable<stock[]>
    id:any



    cp:number
    h:any
    l:any
    op:any
    pc:any
    //currentprices=new Map<string,number>()
    res:Object
    stock1:stock
  stockData: any;
    currprices:Observable<priceQuote>


    constructor(private stockservice:StockService,private route:ActivatedRoute ,private fin:FinnhubService){}
    ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id')
      this.getStocksbyusername(this.id)
      setTimeout(()=>{this.stock1=(this.stocks[0])},4000)
      
      console.log(this.stock1);

      console.log(this.result);
      
      
    }
  
    
    

    getStocksbyusername(id:number){
      // this.stockservice.getStocksbyusername(id).subscribe(res=>{
      //   // console.log(res);
        
      //   this.stocks=res
      //   // console.log(this.stocks.length);
        
      // })

      
        // console.log(res);
        
        this.stocks=this.stockservice.getStocksbyusername(id)
        // console.log(this.stocks.length);
        
      }
    

    // getStockprice(sym:string){
    //   this.fin.getQuote(sym).subscribe(response => {
    //     this.cp = response.c;
    //   });
    // }
    num: number=0;
    getStockprice(sym:string){
      this.fin.getQuote(sym).subscribe(response => {
        console.log('stock ', response)

        
        // this.cp = response
      });

      // while(this.num<=0)
      //   {
      //     var result = response;
      //     this.num++;
      //   }

      // this.currprices=this.fin.getQuote(sym)
      // console.log(this.currprices);
      
    }


    deleteStock(id:number){
      this.stockservice.deleteStockById(id).subscribe(res=>{
          console.log("stock deleted")
          this.getStocksbyusername(id)
      })
    }
}
