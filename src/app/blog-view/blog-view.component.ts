import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { BlogService } from '../blog.service';
import {BlogHttpService} from '../blog-http.service';
import{ToastrService} from 'ngx-toastr';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']

})
export class BlogViewComponent implements OnInit {

// _route is instance of ActivatedRoute class to access function of class.


// we are use this property to store the singleBlog information in this property.   
  public currentBlog;










//in constructor we are create the instance of service ,service's instance is create only once in entire application unless till reinitialize the service
  constructor(private _route:ActivatedRoute,private router:Router,private _blog:BlogService,private _blogHttp:BlogHttpService,toastr:ToastrService,private location:Location) 
  {
    console.log('constructor is called !!!')
   }

  ngOnInit() {

    console.log('ngOnInit is called   !')
//snapshot method traverse the router state tree.
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
      console.log(myBlogId);
      //calling the ffunction get the blog with this blogid out of the overall array.
     //handling the observable
      this._blogHttp.getSingleBlogInformation(myBlogId).subscribe(
            data=>{
              console.log('http service called');
              console.log(data);
              this.currentBlog=data["data"];
            },

      error=>{
        console.log('error is called');
        console.log(error.errorMessage);
      }
      );
  
  }
  deleteThisBlog():any{
    this._blogHttp.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
     alert('blog deleted successfully')
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error=>{
        alert('error is called');
        console.log(error.errorMessage);
        alert('blog not deleted');
      }
    )
  }


  goBackToPreviousPage(): any {

    this.location.back();

  }

 }

