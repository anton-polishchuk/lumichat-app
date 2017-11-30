import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/widgets/profile/profile.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { GalleryComponent } from './components/widgets/gallery/gallery.component';
import { CataloguePageComponent } from './components/catalogue-page/catalogue-page.component';
import { CatalogueComponent } from './components/widgets/catalogue/catalogue.component';
import { StreamPageComponent } from './components/stream-page/stream-page.component';
import { ChatComponent } from './components/widgets/chat/chat.component';
import { ListModePipe } from './pipes/list-mode.pipe';
import { SearchPipe } from './pipes/search.pipe';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    data: { title: 'Welcome To LumiChat' }
  },
  {
    path: 'live',
    component: StreamPageComponent,
    data: { title: 'Live Now' }
  },
  {
    path: 'catalogue',
    component: CataloguePageComponent,
    data: { title: 'Catalogue' }
  },
  {
    path: 'profile',
    component:  ProfilePageComponent,
    data: { title: 'Profile' }
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ProfileComponent,
    ProfilePageComponent,
    GalleryComponent,
    CataloguePageComponent,
    CatalogueComponent,
    StreamPageComponent,
    ChatComponent,
    ListModePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
    // { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
