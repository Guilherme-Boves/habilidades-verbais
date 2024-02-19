import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "habilidades-verbais",
    loadChildren: () => import("./modules/habilidades-verbais/habilidades-verbais.module").then((m) => m.HabilidadesVerbaisModule)
  },
  {
    path: "analogias-verbais",
    loadChildren: () => import("./modules/analogias-verbais/analogias-verbais.module").then((m) => m.AnalogiasVerbaisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
