import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {

  numberForm: FormGroup;
  inputNumber: number;

  @Output() submitNumberOutput: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit(): void {
  	 this.initForm();
  }

  initForm() {
    this.numberForm = this.formBuilder.group({
      inputNumber: ['', Validators.required]     
    });
  }

  submitNumber(): void {
  	this.inputNumber = this.numberForm.value.inputNumber;
 	this.submitNumberOutput.emit(this.inputNumber); 	
  }

}
