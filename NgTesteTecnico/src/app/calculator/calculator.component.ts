import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from './../services/calculation.service';
import { Calculation } from '../models/calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})

export class CalculatorComponent implements OnInit {
  form!: FormGroup;
  calculation!: Calculation;
  result!: number;
  error!: boolean;

  constructor(private calculationService: CalculationService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      valor: ['', [Validators.required]],
      parcela: ['', [Validators.required, Validators.min(1)]]
    });

  }

  get valor(): any { return this.form.get('valor'); }
  get parcela(): any { return this.form.get('parcela'); }

  onSubmit() {
    if (this.form.valid) {
      const calc = Object.assign({}, this.calculation, this.form.value);
      this.calculationService.Calculate(calc).subscribe(
        response => {
          this.calculation = calc;
          this.result = response;
          this.error = false;
        },
        error => {
          console.error(error.message);
          this.error = true;
        }
      );
    }
  }

}
