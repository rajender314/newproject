import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { StudentModule } from './student/student.module';

// import { LightboxModule } from 'ngx-lightbox';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student/student.component';
import { GoogleMapsComponent } from './student/google-maps/google-maps.component';
import { JqueryDemo1Component } from './jquery-demos/jquery-demo1/jquery-demo1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CustomPreloadingService } from './custom-preloading.service';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceEditorComponent } from './shared/components/price-editor/price-editor.component';
import { DropdownEditorComponent } from './shared/components/dropdown-editor/dropdown-editor.component';
import {MatSelectModule} from '@angular/material/select';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { ThemeService } from 'ng2-charts';
import { SimpleformComponent } from './student/simpleform/simpleform.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PixelKitModule } from 'pixel-kit';

import {
  MatToolbarModule, MatFormFieldModule, MatInputModule,
  MatOptionModule,  
  MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule
} from '@angular/material';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './Login/home/home.component';
import { MovieDetailsComponent } from './MovieDetals/movie-details/movie-details.component';
@NgModule({
  declarations: [
    AppComponent,
    JqueryDemo1Component,
    ParentComponent,
    ChildComponent,
    PriceEditorComponent,
    DropdownEditorComponent,
    SnackbarComponent,
    LoginComponent,
    HomeComponent,
    MovieDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    // StudentModule,
    FormsModule,
    AppRoutingModule,
    LightboxModule,
    GalleryModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule, MatFormFieldModule, MatInputModule,
    MatOptionModule,  
    MatButtonModule, MatCardModule, MatTableModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    PixelKitModule
    
   
  ],
  entryComponents: [
    PriceEditorComponent, 
    DropdownEditorComponent,
    SnackbarComponent,
    
  ],
  providers: [CustomPreloadingService, ThemeService,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }