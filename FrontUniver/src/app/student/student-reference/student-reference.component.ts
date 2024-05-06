import { Component, Input, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-reference',
  templateUrl: './student-reference.component.html',
  styleUrl: './student-reference.component.css',
  
})
export class StudentReferenceComponent {
  fileSelected: boolean = false;
  isImageFile: boolean = true;
  showAlert: boolean;
  alertMessage: string;
  // toaster=inject(ToastrService)  

  onSubmit(): void {
    if (!this.isImageFile) {
      alert('Please select an image file.');
      return;
    }

    alert("Form submitted successfully!");
    // this.toaster.success("Form submitted successfully!","Success")
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileSelected = true;
      this.isImageFile = file.type.startsWith('image/');
    }
  }

}
