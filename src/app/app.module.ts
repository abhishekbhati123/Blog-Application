import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for setting up the application level routing
import{RouterModule,Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from "@angular/common/http"; 


//imports the toastr and BrowserAnimation module


import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { ToastrModule } from 'ngx-toastr';

//imports the forms module

import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    BlogEditComponent,
    BlogPostComponent,
    BlogViewComponent
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,ToastrModule.forRoot(),FormsModule,HttpClientModule,RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'post',component:BlogPostComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
