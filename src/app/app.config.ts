import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { provideRouter } from '@angular/router';

import {cacheInterceptor, apiKeyInterceptor} from "./interceptors";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([apiKeyInterceptor, cacheInterceptor])),
    provideRouter(routes)
  ]
};
