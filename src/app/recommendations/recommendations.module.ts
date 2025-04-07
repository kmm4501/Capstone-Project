import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RecommendationsPage } from './recommendations.page';
import { RecommendationsPageRoutingModule } from './recommendations-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecommendationsPageRoutingModule,
    // Instead of declaring, import the standalone component:
    RecommendationsPage,
  ],
})
export class RecommendationsPageModule {}
