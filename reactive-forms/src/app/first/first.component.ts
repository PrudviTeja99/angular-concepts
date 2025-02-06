import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  employeeForm: FormGroup;

  formBuilder =inject(FormBuilder);

  constructor(){
    this.employeeForm = this.formBuilder.group({

      name: this.formBuilder.control('',[Validators.required]),  //Two ways of declaring a form control
      email: ['',[Validators.email,Validators.required]],     //giving multiple validators in an array

      skills: this.formBuilder.array([])  //Declaring an array in form group
    })
  }

  addAddress(){

    //Adding Form Control from form group
    this.employeeForm.addControl('address',new FormControl(''));

  }

  removeAddress(){

    //Removes Form Control from Form Group
    this.employeeForm.removeControl('address');

  }
  
  addSkill(){
     const skills = this.employeeForm.get('skills') as FormArray; //Fetching Form Array from form group
     skills.push(new FormControl('')); //Adding a form control to the form array
  }

  //removing an element from form array
  removeSkill(index: number){
    this.skills.removeAt(index);
  }

  //For input in template need to declare this
  get skills():FormArray{
    return this.employeeForm.get('skills') as FormArray;
  }

  register(){
    console.log(this.employeeForm.value);
  }

}
