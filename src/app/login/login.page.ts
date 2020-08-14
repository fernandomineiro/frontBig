import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import config from 'src/config'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: Student
  constructor(
    public apiService: ApiService,
    public router: Router
  ) { 
    this.data = new Student();
  }

  ngOnInit() {
  }

  submitForm() {
    
    console.log(this.data.password);
    console.log(this.data.telefone);
   // this.router.navigate(['central']);
    this.apiService.login(this.data.telefone, this.data.password).subscribe((response) => {
     // console.log(response);
      if(response !== null && response !== undefined){
       
        if(response['indicou'] == '0000000000'){
          this.router.navigate(['joguinho']);
        }else{
          if(response['banido'] != 1){
            config.telefone = response.telefone;
            this.router.navigate(['central']);
          }
          else{
            alert('Usuario banido!');
          }
        }
      }
      else{
        alert('Usuario ou senha incorretos');
        this.router.navigate(['login']);
      }
      
    });
   
  }

}
