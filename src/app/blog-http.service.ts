import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
//import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import {catchError} from  'rxjs/operators';


//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import {tap} from 'rxjs/operators';
//import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public blogData;
public currentBlog;
public allBlogs;
public baseurl='https://blogapp.edwisor.com/api/v1/blogs';
public authToken='OGE3YzE0YjkyYzBhNDFmMzJjYTliMjVmYWMzY2RkNWVmOWY3ODE4ZjhlMjkwY2VmZThjZTExYTFiMTY3N2Q5MGU4Yjk4MTM3MzQzMGE2YTAwYmMzODQzZWZiNzAzODFjYzM1YTEwMzVmZjcxYmE5YTRiODc1MjAxYjY1ZjZlYTJiNA==';

//create the instance of service
  constructor(private _http:HttpClient) { }

  //exception handler
  public handleError(err:HttpErrorResponse){
    console.log('blog http service');
    console.log(err.message);
    return Observable.throw(err.message);
  }



  //method to return all the blogs

  // here we are using get method to get all blogs data.
  public getAllBlogs(): any{
    let myResponse=this._http.get(this.baseurl+'/all' + '?authToken='+ this.authToken)
    console.log(myResponse);
    return myResponse;
  }
  //in this service we are get method get single blog information
  public getSingleBlogInformation(currentBlogId):any{
    let myResponse=this._http.get(this.baseurl+'/view' +'/'+currentBlogId+ '?authToken='+this.authToken)
    console.log(myResponse);
    return myResponse;
  }
  //here we are using post method to create post 
  public createBlog(blogData):any{
    console.log(blogData)
    let myResponse = this._http.post(this.baseurl + '/create' + '?authToken=' + this.authToken, blogData)
    //return myResponse;
    console.log(myResponse);
    return myResponse;
  }

  //here we are using delete Method to create 
  public deleteBlog(blogId):any{
    let data={}
    let myResponse = this._http.post(this.baseurl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data);
    //return response
//    console.log(myResponse);
    return myResponse;
  }
  



  //here we are using edit Method to edit already created blog
  public editBlog(blogId,blogData):any{
    let myResponse=this._http.put(this.baseurl+'/'+blogId+'/edit'+'?authToken='+this.authToken,blogData);
    return myResponse;
    
  }



}

