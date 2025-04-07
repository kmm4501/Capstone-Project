import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class SurveyPage {
  // For demonstration, we use a default userId.
  userId: string = 'user123';

  // Survey data with default empty values
  survey = {
    diet: '',
    goal: ''
  };

  constructor(private router: Router) {}

  submitSurvey() {
    console.log('Survey submitted:', this.survey);
    // Here you could call your backend API to save survey data.
    // Then navigate to the recommendations page.
    this.router.navigate(['/recommendations', this.userId]);
  }
}
