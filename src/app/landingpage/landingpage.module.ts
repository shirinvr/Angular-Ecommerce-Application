import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpecialofferComponent } from './components/specialoffer/specialoffer.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchproductComponent } from './components/searchproduct/searchproduct.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { UserorderModule } from '../userorder/userorder.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SpecialofferComponent,
    CategoryComponent,
    SearchproductComponent,
    LandingHomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    UserorderModule
  ]
})
export class LandingpageModule { }
