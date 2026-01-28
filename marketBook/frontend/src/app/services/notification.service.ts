import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private toastSubject = new Subject<Toast>();
  toasts$ = this.toastSubject.asObservable();
  private nextId = 0;

  show(message: string, type: 'success' | 'error' | 'info' = 'success'): void {
    this.toastSubject.next({
      message,
      type,
      id: this.nextId++,
    });
  }
}
