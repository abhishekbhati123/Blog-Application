import { Component, OnInit,OnDestroy } from '@angular/core';
//import {BlogService} from '../blog.service';
import {BlogHttpService} from '../blog-http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
//here we create instance of service

  public allBlogs=[];
  constructor(private _http:BlogHttpService) {
    console.log('Http Service is called');
   }

  	//here we have array of object
    


  ngOnInit() {
//here we need to handle the observable with the using subscribe() method.
    this.allBlogs=this._http.getAllBlogs().subscribe(
      data =>{
        console.log("logging data");
        console.log(data);
        this.allBlogs=data["data"];
      },
      error=>{
        console.log('error message occurred');
        console.log(error.errorMessage);

      }
    )
   // console.log(this.allBlogs);
    
  }
  ngOnDestroy(){

  }

}
