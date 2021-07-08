import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';

import { MatCardModule} from '@angular/material/card'; 
import { MatButtonModule} from '@angular/material/button'; 

@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    ListaContatosComponent,
    ListaUsuariosComponent,
    FormContatosComponent,
    FormUsuariosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
