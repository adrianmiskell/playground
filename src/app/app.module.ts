import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { SummaryPipe } from './shared/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { ContainerExampleComponent } from './container-example/container-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { ZippyAssignmentComponent } from './zippy-assignment/zippy-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    ContainerExampleComponent,
    SwitchExampleComponent,
    ZippyAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
