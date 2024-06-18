declare var google:any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
   private router=inject(Router);

     ngOnInit(): void {
       google.accounts.id.initialize({
        client_id:'979002632207-ipmesq915ueqcpi540d5pfpq7notuth3.apps.googleusercontent.com',
        callback: (resp:any)=>this.handleLogin(resp)
       });

       google.accounts.id.renderButton(document.getElementById("google-btn"),{
        theme:'filled_blue',
        size:'large',
        shape:'rectangle',
        width:350
       })
     }
 private decodeToken(token:string){
  return JSON.parse(atob(token.split(".")[1]))
 }

     handleLogin(respose:any){
        if(respose){
          const payload=this.decodeToken(respose.credential);
          sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
          this.router.navigate(['browse']);
        }
     }
}
