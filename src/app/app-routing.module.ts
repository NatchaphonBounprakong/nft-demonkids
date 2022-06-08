import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AmuletComponent } from './amulet/amulet.component';
import { AppComponent } from './app.component';
import { BabyDragonsComponent } from './baby-dragons/baby-dragons.component';
import { DemonKidsComponent } from './demon-kids/demon-kids.component';
import { HomeComponent } from './home/home.component';
import { LionAboutComponent } from './lion-about/lion-about.component';
import { LionHypehogsComponent } from './lion-hypehogs/lion-hypehogs.component';
import { LionRoadmapComponent } from './lion-roadmap/lion-roadmap.component';
import { StartComponent } from './start/start.component';
import { ToughLionsComponent } from './tough-lions/tough-lions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'demonkids',
    component: DemonKidsComponent,
    children: [
      {
        path: '',
        component: StartComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'babydragons',
        component: BabyDragonsComponent,
      },
      {
        path: 'amulet',
        component: AmuletComponent,
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'toughlions',
    component: ToughLionsComponent,
    children: [
      {
        path: 'about',
        component: LionAboutComponent,
      },
      {
        path: 'roadmap',
        component: LionRoadmapComponent,
      },
      {
        path: 'hypehogs',
        component: LionHypehogsComponent,
      },
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
