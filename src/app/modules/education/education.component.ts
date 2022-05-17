import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public education: Educacion[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Educacion[]) => {
        this.education = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode:String, education?:Educacion):void{
    console.log('onOpenModal', mode, education);
  }
}
