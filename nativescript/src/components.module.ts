// nativescript
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpModule,
  NativeScriptRouterModule
} from 'nativescript-angular';
import { Http } from '@angular/http';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// libs
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// app
import { AppComponent } from './app/shared/sample/components/app/app.component';
import { HomeComponent } from './app/shared/sample/components/home/home.component';
import { routes } from './app/shared/sample/components/app/app.routes';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { AnalyticsModule } from './app/shared/analytics/analytics.module';
import { SampleModule } from './app/shared/sample/sample.module';

// intermediate component module
// helps encapsulate custom native modules in with the components
// note: couple ways this could be done, just one option presented here...
@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    AnalyticsModule,
    CoreModule,
    SampleModule
  ],
  declarations: [
    AppComponent,
    HomeComponent  
    ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    AppComponent,
    AnalyticsModule,
    CoreModule,
    SampleModule
  ]
})
export class ComponentsModule { }

// For AoT compilation to work:
export function cons() {
  return console;
}