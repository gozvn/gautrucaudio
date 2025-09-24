import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient , withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { DemoInterceptor } from './interceptors/demo.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Thêm dòng này để cung cấp HttpClient và Interceptor
    provideHttpClient(
        withInterceptorsFromDi(), 
        withFetch()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true
    },
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
