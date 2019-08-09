import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {BlogHttpService} from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {


  


  constructor(private _route:ActivatedRoute,private router:Router,private _service: BlogHttpService,private toastr:ToastrService,vcr:ViewContainerRef) { 
     
  }

//define properties

public blogTitle: string;
public blogBodyHtml: string;
public blogDescription: string;
public blogCategory: string;
public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];
  ngOnInit() {
  }

  createBlog():any{
    // passing objects
    let blogData ={
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory

    }
    console.log(blogData);
    //calling the function to create the post 
    //handling the observable
    this._service.createBlog(blogData).subscribe(
      data=>{
        console.log('http service called');
        console.log(data);
        this.toastr.success('blog Post successfully');
        setTimeout(()=> {
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
        
        
      },
      error=>{
        console.log('error');
        console.log(error.errorMessage);
        this.toastr.error('blog not posted');
      }
    )
  } 

}
