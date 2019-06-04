import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],

})
export class FirstModule {
  static forRoot(data: any): ModuleWithProviders {
    return {
      providers: [
        {
          provide: 'MY SUPER SERVICE',
          useValue: data,
          multi: true
        }
      ],
      ngModule: FirstModule
    }
  }
}
