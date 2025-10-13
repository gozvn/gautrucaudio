import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  // dùng Angular signal để reactive (Angular 16+ hỗ trợ)
  isLoading = signal(false);
  private requests = 0;

    show(): void {
        this.requests++;
        this.isLoading.set(true);
    }

    hide(): void {
        this.requests--;
        if (this.requests <= 0) {
        this.requests = 0;
        this.isLoading.set(false);
        }
    }
    reset(): void {
        this.requests = 0;
        this.isLoading.set(false);
    }
}
