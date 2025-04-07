import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyPage } from './survey/survey.page';
import { RecommendationsPage } from './recommendations/recommendations.page';

const routes: Routes = [
  { path: '', redirectTo: 'survey', pathMatch: 'full' },
  { path: 'survey', component: SurveyPage },
  { path: 'recommendations/:userId', component: RecommendationsPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}