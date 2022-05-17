import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public user: Persona | undefined;
  public editUser: Persona | undefined;

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.headerService.getUser().subscribe ({
      next: (response: Persona) => {
        this.user = response;
        
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }


}
