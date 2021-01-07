import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarComponent } from './components/cargar/cargar.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// directives
import { DropfileDirective } from './directives/dropfile.directive';


@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    FotosComponent,
    NavbarComponent,
    DropfileDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
