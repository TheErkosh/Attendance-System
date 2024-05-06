import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/AuthService';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  loggedInUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch user data when the component initializes
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
