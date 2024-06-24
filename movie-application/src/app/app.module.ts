// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieService } from './movie.service';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Asegúrate de importar AppRoutingModule

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule  // Asegúrate de que AppRoutingModule esté importado aquí
  ],
  providers: [MovieService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
