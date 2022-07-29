import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Feedback } from '../feedback';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedback:Feedback = new Feedback();
  constructor(private fb:FormBuilder,private registerService:RegisterService){ }
  feedbackForm = this.fb.group({
    name:[''],
    email:[''],
    message:['']
  })
  onSubmit(){
    this.registerService.sendFeedback(this.feedback)

    
  }
  ngOnInit(): void {
  }

}
