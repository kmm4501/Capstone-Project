import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class RecommendationsPage implements OnInit {
  // Using definite assignment operator (!) to tell TypeScript this will be set.
  userId!: string;
  recommendations: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the userId from the route parameters.
    this.userId = this.route.snapshot.paramMap.get('userId') || 'defaultUser';

    // For demonstration, we'll use sample recommendations.
    // In a real app, you might call a backend API to fetch personalized recommendations.
    this.recommendations = [
      { id: 1, name: 'Garden Salad', calories: 150 },
      { id: 2, name: 'Chicken Soup', calories: 250 },
      { id: 3, name: 'Quinoa Bowl', calories: 300 },
    ];
  }

  orderItem(item: any) {
    console.log('Ordering item:', item);
    // Implement ordering logic or call your backend API here.
  }
}
