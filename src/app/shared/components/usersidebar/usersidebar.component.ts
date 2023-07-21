import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/userprofile/models/userdetails';
import { UserDetailsService } from 'src/app/userprofile/services/user-details.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent {
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
