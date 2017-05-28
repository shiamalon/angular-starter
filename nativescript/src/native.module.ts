// nativescript
import {
  NativeScriptRouterModule,
  RouterExtensions as TNSRouterExtensions
} from 'nativescript-angular/router';

// angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import {
  WindowService,
  ConsoleService,
  RouterExtensions,
  AppService
} from './app/shared/core/index';
import { AppComponent } from './app/shared/sample/components/app/app.component';
import { routes } from './app/shared/sample/components/app/app.routes';

// feature modules
import { CoreModule } from './app/shared/core/core.module';
import { ComponentsModule, cons } from './components.module';

// {N} custom app specific
import { WindowNative, NSAppService } from './mobile/core/index';

/**
 * Config
 * Seed provided configuration options
 */
import { Config } from './app/shared/core/index';
import { Page } from 'tns-core-modules/ui/page';
Config.PageClass = Page;

// (required) platform target (allows component decorators to use the right view template)
Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

// (optional) log level - defaults to no logging if not set
Config.DEBUG.LEVEL_4 = true;

// (optional) custom i18n language support
// example of how you can configure your own language sets
// you can use the AppConfig class or build something similar into your own framework
import { AppConfig } from './app/shared/sample/services/app-config';

@NgModule({
  imports: [
    CoreModule.forRoot([
      { provide: WindowService, useClass: WindowNative },
      { provide: ConsoleService, useFactory: (cons) },
    ]),
    ComponentsModule,
    NativeScriptRouterModule.forRoot(<any>routes)
  ],
  providers: [
    { provide: RouterExtensions, useClass: TNSRouterExtensions },
    { provide: AppService, useClass: NSAppService },
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class NativeModule { }
