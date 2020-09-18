import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
v1Value = 0;
 v2Value = 0;
 resultValue : number;
  constructor() { }

  ngOnInit(): void {
  }
  add(value: number,v2: number): void {
   this.resultValue = Number(value)+Number(v2);
   }

   moins(value:number,v2:number): void {
   this.resultValue = Number(value)-Number(v2);
   }

   mult(value:number,v2:number): void {
    this.resultValue = Number(value)*Number(v2);
    }

    div(value:number,v2:number): void {
      this.resultValue = Number(value)/Number(v2);
      }


}
