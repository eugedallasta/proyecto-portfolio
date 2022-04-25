import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    NavBarComponent,
    LoginComponent,
    HeroComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [NavBarComponent,
    LoginComponent,
    HeroComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    FooterComponent
  ]
})
export class ModulesModule { }
