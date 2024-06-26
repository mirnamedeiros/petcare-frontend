import { ApplicationConfig } from '@angular/core';
import {provideHttpClient} from "@angular/common/http";

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
// ng zorro calendar
import en from '@angular/common/locales/en';
import {registerLocaleData} from "@angular/common";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(), // Add provideHttpClient to providers
    { provide: NZ_I18N, useValue: en_US }
  ]
};
