import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  email = '';
  emailSent = false;

  onSubmit() {
    console.log('Password reset requested for:', this.email);
    // Simular envío de email
    this.emailSent = true;
    // Aquí iría la lógica para enviar el email de recuperación
  }

  resetForm() {
    this.emailSent = false;
    this.email = '';
  }
}
