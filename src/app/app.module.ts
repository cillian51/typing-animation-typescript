import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypingComponent } from './typing/typing.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TypingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
