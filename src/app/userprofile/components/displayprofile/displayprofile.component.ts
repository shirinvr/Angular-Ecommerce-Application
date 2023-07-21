import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';
import { userDetails } from '../../models/userdetails';

@Component({
  selector: 'app-displayprofile',
  templateUrl: './displayprofile.component.html',
  styleUrls: ['./displayprofile.component.css']
})

export class DisplayprofileComponent implements OnInit {
  public userdetails: userDetails;

  constructor(private route: ActivatedRoute, private userService: UserDetailsService) { }

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('user_id'), 10); // Convert the string to a number
    this.userService.getUserDetailsid(userId).subscribe(
      (response: userDetails) => {
        this.userdetails = response;
      },
      (error) => {
        console.error('Failed to retrieve user details:', error);
      }
    );
  }
}
