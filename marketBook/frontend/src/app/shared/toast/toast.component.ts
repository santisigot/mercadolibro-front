import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService, Toast } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private subscription: Subscription | undefined;
  
  toasts: Toast[] = [];

  ngOnInit(): void {
    this.subscription = this.notificationService.toasts$.subscribe((toast) => {
      this.toasts.push(toast);
      
      // Auto-remove after 3 seconds
      setTimeout(() => {
        this.removeToast(toast.id);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter((t) => t.id !== id);
  }
}
