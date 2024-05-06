import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/AuthService';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {
  loggedInUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Fetch user data when the component initializes
    this.loggedInUser = this.authService.getLoggedInUser();
  }

}
