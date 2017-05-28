// nativescript
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { device } from 'tns-core-modules/platform';

// app
import { IWindow } from '../../../app/shared/core/interfaces/iwindow';

export class WindowNative implements IWindow {
  public get navigator(): any {
    return {
      language: device.language,
      userAgent: 'nativescript'
    };
  }
  public get location(): any {
    return {
      host: 'nativescript'
    };
  }
  public alert(msg: string): Promise<any> {
    return dialogs.alert(msg);
  }
  public confirm(msg: string): Promise<any> {
    return dialogs.confirm(msg);
  }
}
