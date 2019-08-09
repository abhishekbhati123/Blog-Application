import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogHttpService } from "../blog-http.service";
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  
  constructor(private _route: ActivatedRoute, private router: Router, private _blogHttp: BlogHttpService, private location: Location,private toastr: ToastrService) {}

  //constructor() { }

  ngOnInit() {


    let myBlogId=this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    //calling this function to get singleBlogInformation
    this._blogHttp.getSingleBlogInformation(myBlogId).subscribe(
     data=>{
       console.log('http service called');
       console.log(data);
       this.currentBlog=data["data"];

      },
      error=>{
        console.log('error called');
        console.log(error.errorMessage);
      }
    )

  }

  editThisBlog():any{
    this._blogHttp.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
      data=>{
        console.log(data)
        this.toastr.success('edited Successfully');
        setTimeout( ()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId])
        },1000)
      },
      error=>{
        console.log('error called')
        this.toastr.error('Not Edited');
      }
    )
  }
  

}
