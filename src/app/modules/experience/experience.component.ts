import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experience: Experiencia[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience(): void {
    this.experienceService.getExperience().subscribe({
      next: (response: Experiencia[]) => {
        this.experience = response;
        console.log(this.experience);
        console.log(response);

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

}
