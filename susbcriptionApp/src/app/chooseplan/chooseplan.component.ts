import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/service/plan.service';
import {Observable} from "rxjs";

export interface Period {
  name: string;
  discount: number;
  months: number;
}

@Component({
  selector: 'app-chooseplan',
  templateUrl: './chooseplan.component.html',
  styleUrls: ['./chooseplan.component.css']
})

export class ChooseplanComponent implements OnInit {
  plans: any [] = [];
  periods: any [] = [];
  period: Period = {
    name: "monthly",
    discount: 0,
    months: 1
  }
  planObservables: { [name: string]: Observable<any> } = {};

  constructor(private planservice:PlanService) { }

  ngOnInit(): void {
    this.mostrar(this.period)
    this.getPeriod()
    this.createPlanObservables();
  }
  createPlanObservables() {
    for (let plan of this.plans) {
      this.planObservables[plan.name] = this.planservice.getPlanByName(plan.name);
    }
  }

  mostrar(period: any){
    this.planservice.getPlan(period.name).subscribe(
      (response) => {
        this.plans = response
        this.setPeriod(period)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getPeriod(){
    this.planservice.getPeriod().subscribe(
      (response) => {
        // Manejar la respuesta del backend (éxito, error, etc.)
        console.log('Respuesta del backend:', response);
        this.periods = response
      },
      (error) => {
        // Manejar errores (por ejemplo, mostrar un mensaje de error al usuario)
        console.error('Error al enviar la suscripción:', error);
      }
    );
  }

  setPeriod(period: any): void {
    this.period = period
  }

  protected readonly name = name;
}


