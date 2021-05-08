import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

 onSubmit(data:any){
   console.log(data.value)
   this.http.post<any>("http://localhost:3000/form",data.value).subscribe(
  data=>console.log("Success",data),
  error=>console.log("failed",error)
   )
   if(data.value == "success"){
      this.route.navigate(['../login/login.component.html'])
  } else {
      console.log('Hello')
  }

 }

}

