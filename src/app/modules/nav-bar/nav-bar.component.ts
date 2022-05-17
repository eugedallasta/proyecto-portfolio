import { SnackbarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private SnackbarService: SnackbarService) { }
  
  openSnackBar(message:any, buttonText:any) {
    this.SnackbarService.openSnack(message, buttonText);
  }

  ngOnInit(): void {
  }

}
