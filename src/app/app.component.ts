import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    { 
      title: "Super tree",
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'This is a super tree'
    },
    { 
      title: "Neat mountain",
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here you have a big ass mountain'
    },
    { 
      title: "Mountain Biking",
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking123',
      content: 'This is a bike with the sunset'
    },
  ]

}
