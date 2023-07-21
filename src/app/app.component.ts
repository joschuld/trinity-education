import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trinity-education';
}


const teacherList: any[] = [

  {
    "name": "John Doe",
    "education": "Master's Degree in Education",
    "subject": "Mathematics",
    "experience": "10 years of teaching experience",
    "achievements": "Recipient of the Best Math Teacher Award"
    },
    {
    "name": "Jane Smith",
    "education": "Bachelor's Degree in English Literature",
    "subject": "English Language and Literature",
    "experience": "8 years of teaching experience",
    "achievements": "Published author of several short stories"
    },
    {
    "name": "Michael Johnson",
    "education": "Master's Degree in Science",
    "subject": "Physics",
    "experience": "12 years of teaching experience",
    "achievements": "Contributed to research in quantum physics"
    },
    {
    "name": "Emily Thompson",
    "education": "Ph.D. in History",
    "subject": "Social Studies",
    "experience": "15 years of teaching experience",
    "achievements": "Presented papers at international history conferences"
    }

]