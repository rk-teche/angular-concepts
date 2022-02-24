import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  aloneControl = new FormControl('testing');
  userForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    LastName: new FormControl(null, [Validators.max(100)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  })
  
  // bigUserForm = new FormArray([
  //   new FormGroup({
  //     firstName: new FormControl('user data 1', [Validators.required]),
  //     lastName: new FormControl(null, [Validators.required]),
  //     email: new FormControl(null, [Validators.required, Validators.email])
  //   }),
  //   new FormGroup({
  //     firstName: new FormControl('user data 2', [Validators.required]),
  //     lastName: new FormControl(null, [Validators.required]),
  //     email: new FormControl(null, [Validators.required, Validators.email])
  //   })
  // ])

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log('bigUserForm', this.bigUserForm)

    // this._fb.group({
    //   date: this._fb.control(new Date()),
    //   users: this._fb.array([
    //     this._fb.group({
    //       firstName: new FormControl('user data 2', [Validators.required]),
    //       lastName: new FormControl(null, [Validators.required]),
    //       email: new FormControl(null, [Validators.required, Validators.email])
    //     }),
    //     this._fb.group({
    //       firstName: new FormControl('user data 2', [Validators.required, this.minValidator]),
    //       lastName: new FormControl(null, [Validators.required]),
    //       email: new FormControl(null, [Validators.required, Validators.email])
    //     })
    //   ])
    // })
  }

  // minValidator(c: FormControl){
  //   return c.value.length > 2 ? null : {
  //     validAmount: {
  //       valid: false
  //     }
  //   }
  // }

  // ngDoCheck(){
  //   console.log('form component trigger')
  // }

  submitUserForm(){
    if(this.userForm.invalid) return;

    console.log('data', this.userForm.value)
  }

  submitUserFormMulti(){
    // console.log('data', this.bigUserForm)
    // if(this.bigUserForm.invalid) return;

  }

}
