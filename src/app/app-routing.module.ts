import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarComponent } from './components/cargar/cargar.component';
import { FotosComponent } from './components/fotos/fotos.component';


const routes: Routes = [
  {path:'cargar', component: CargarComponent },
  {path:'fotos', component: FotosComponent },
  { path: '**', redirectTo: '/fotos', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
