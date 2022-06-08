import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { BabyDragonsComponent } from './baby-dragons/baby-dragons.component';
import { AmuletComponent } from './amulet/amulet.component';
import { DemonKidsComponent } from './demon-kids/demon-kids.component';
import { ToughLionsComponent } from './tough-lions/tough-lions.component';
import { HomeComponent } from './home/home.component';
import { LionAboutComponent } from './lion-about/lion-about.component';
import { LionRoadmapComponent } from './lion-roadmap/lion-roadmap.component';
import { LionHypehogsComponent } from './lion-hypehogs/lion-hypehogs.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AboutComponent,
    BabyDragonsComponent,
    AmuletComponent,
    DemonKidsComponent,
    ToughLionsComponent,
    HomeComponent,
    LionAboutComponent,
    LionRoadmapComponent,
    LionHypehogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
