import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceCreateComponent } from './modules/experience-create/experience-create.component';
import { ExperienceComponent } from './modules/experience/experience.component';

const routes: Routes = [
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'createExperiencia', component: ExperienceCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
