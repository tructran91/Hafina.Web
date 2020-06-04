import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from './topbar.model';
import { notificationItems } from './data';
import { EventService } from 'src/app/core/services/event.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  notificationItems: Notification[];
  languages: Array<{
    id: number,
    flag?: string,
    name: string
  }>;
  selectedLanguage: {
    id: number,
    flag?: string,
    name: string
  };
  selectValue: string[];

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router, private authService: AuthenticationService, private eventService: EventService) {}

  ngOnInit() {
    // get the notifications
    this._fetchNotifications();
    this.openMobileMenu = false;

    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];
  }

  onChangeCompany(data){
    this.eventService.notifyChangeCompany(data);
  }

  /**
   * Change the language
   * @param language language
   */
  changeLanguage(language) {
    this.selectedLanguage = language;
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
  }

  /**
   * Fetches the notification
   * Note: For now returns the hard coded notifications
   */
  _fetchNotifications() {
    this.notificationItems = notificationItems;
  }
}
