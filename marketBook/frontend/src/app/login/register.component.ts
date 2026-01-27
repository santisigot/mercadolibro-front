import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  showPassword = false;
  showConfirmPassword = false;

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
    console.log('Register attempt:', { 
      fullName: this.fullName, 
      email: this.email,
      acceptTerms: this.acceptTerms 
    });
    // Aquí iría la lógica de registro
  }

  registerWithGoogle() {
    console.log('Register with Google');
    // Aquí iría la lógica de OAuth con Google
  }
}
