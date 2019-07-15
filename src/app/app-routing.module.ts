import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
  { path:'inicio', component: InicioComponent},
  { path:'acercade', component: AcercadeComponent},
  { path:'contacto', component: ContactoComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
