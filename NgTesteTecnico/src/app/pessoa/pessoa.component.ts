import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  form!: FormGroup;
  pessoa!: Pessoa;
  error!: boolean;


  constructor(private pessoaService: PessoaService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      id: ["", [Validators.required, Validators.min(1), Validators.max(3)]]
    });
  }

  get id(): any { return this.form.get("id");}

  onSubmit() {
    if(this.form.valid)
    {
      this.pessoaService.getPessoaId(this.form.value.id).subscribe(response => {
        this.error = false;
        this.pessoa = response;
      },
      error => {
        console.log(error.message);
        this.error = true;
      })
    }
  }

}
