import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { RouterModule }  from '@angular/router'
import { UserService} from './user.service'

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    UserComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot([
      {
        path: 'form' , component:FormComponent
      },
      {
        path: 'form/:id' , component:FormComponent
      },
      {
        path: 'user' , component:UserComponent
      },
      {
        path: 'display' , component:DisplayComponent
      },
    ])
  ],
  providers: [
    UserService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
