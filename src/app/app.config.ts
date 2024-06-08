import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// ng zorro calendar
import en from '@angular/common/locales/en';
import {registerLocaleData} from "@angular/common";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),  { provide: NZ_I18N, useValue: en_US }]
};
