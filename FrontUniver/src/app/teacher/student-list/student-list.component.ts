import { Component } from '@angular/core';
import { User } from '../../model/User';
import { AuthService } from '../../service/AuthService';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  public users: User[];
  absent: number = 15;
  totalLessons: number = 30;

  constructor(private authService: AuthService) {}

  // Assuming you have a method to fetch users from some service
  getUsers(): void {
    this.authService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  searchEmployees(event: Event): void {
    // Cast event.target to HTMLInputElement to access its 'value' property
    const key = (event.target as HTMLInputElement).value;
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (
        user.firstName.toLowerCase().includes(key.toLowerCase()) ||
        user.username.toLowerCase().includes(key.toLowerCase()) ||
        user.lastName.toLowerCase().includes(key.toLowerCase())
      ) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers(); // Call the getUsers method to reset the list
    }
  }

  get absentPercentage(): number {
    return (this.absent / this.totalLessons) * 100;
  }

  increaseAbsent(): void {
    if (this.absent < this.totalLessons) {
      this.absent++;
    }
  }

  decreaseAbsent(): void {
    if (this.absent > 0) {
      this.absent--;
    }
  }
}
