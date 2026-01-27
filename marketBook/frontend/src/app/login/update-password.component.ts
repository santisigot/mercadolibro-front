import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss',
})
export class UpdatePasswordComponent {
  password = '';
  confirmPassword = '';
  showPassword = false;
  showConfirmPassword = false;
  showSuccess = false;

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  getPasswordStrength(): string {
    if (!this.password) return '';
    if (this.password.length < 6) return 'weak';
    if (this.password.length < 10) return 'medium';
    return 'strong';
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Password update attempt for new password');
    
    // Simulate success
    this.showSuccess = true;
    
    // Redirect to login after 3 seconds
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}
