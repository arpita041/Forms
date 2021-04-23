import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder , Validators } from '@angular/forms';
import { RegistrationService } from './register.service';
import { passwordValidator } from './shared/password.validate';
import {ForbiddenNameValidator} from './shared/email.validate';

//import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'TheForms';
    public registration:any;
 constructor (private fb : FormBuilder ,private myService : RegistrationService)
 { }
 ngOnInit()
 {
   this.registration = this.fb.group({
     rating:['', Validators.required],
     fname:['Arpita' ,Validators.required],
     lname:['Maurya' ,Validators.required],
     email:['' ,Validators.required],
     subject:['', Validators.required],
     occupation:['',Validators.required],
     company: ['', Validators.required],
     job:['', Validators.required],
     fee:['' , Validators.required],
     workshopDate:['juneStart', Validators.required],
     add : this.fb.group({
       street:['' , Validators.required],
       city:['', Validators.required],
       state:['' , Validators.required],
       code:['' , Validators.required]
     })
   })
 }
 onSubmit() {
  console.log(this.registration.value);
  this.myService.register(this.registration.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
}
//  registration= new FormGroup({
//     userName : new FormControl('Arpita'),
//     password : new FormControl('12345678'),
//     confirmPassword : new FormControl('12345678'),
//     add: new FormGroup({
//       city: new FormControl('lucknow'),
//       state : new FormControl('Uttar Pradesh'),
//       code: new FormControl(262701)
//     })
//   });
// loadData()
// {
//   this.registration.setValue(
//     {
//       userName: 'Odette',
//       password:'OdetteLance',
//       confirmPassword: 'OdetteLance',
//       add :
//       {
//         city : 'Arena',
//         state: 'Valor',
//         code: 1028332
//       }
//     }
//   )
// }
}
