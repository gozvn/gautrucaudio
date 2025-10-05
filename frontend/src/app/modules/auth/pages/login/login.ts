import { Component } from '@angular/core';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';
import { FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [Header,Footer,CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
    form : FormGroup;
    error = ''
    constructor (private fb: FormBuilder, private auth: AuthenticationService){
      this.form = this.fb.group({
        email :'',
        password :''
      })
    }
    
    onSubmit(){
        const { email,password } = this.form.value;
        const success = this.auth.login(email,password);
        if (!success) {
          this.error = " Sai email / password ";
        }
    }
}
