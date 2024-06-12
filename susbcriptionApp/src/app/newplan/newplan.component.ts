import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';
import { Plan } from 'src/models/plan';
import { PlanService } from 'src/service/plan.service';
@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
      const input = event.target as HTMLInputElement;
      const value = input.value;

      // Elimina cualquier carácter que no sea un número
      input.value = value.replace(/[^0-9]/g, '');
  }
}

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})

export class NewplanComponent implements OnInit {
  httpResponse:any = null;



  ngOnInit(): void {
    
  }
    constructor( private planservice:PlanService) {
      
    }
  createNewPlan(name:any, price:any, description:any ){

    const newplan:Plan = {
      name:name,
      price:price,
      description:description
    }
    

        this.planservice.createPlan(newplan).subscribe(
      (response) => {
        // Manejar la respuesta del backend (éxito, error, etc.)
        console.log('Respuesta del backend:', response);
      },
      (error) => {
        // Manejar errores (por ejemplo, mostrar un mensaje de error al usuario)
        console.error('Error al enviar la suscripción:', error);
      }
    );

   }
}