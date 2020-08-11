import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:User;
  /**
   * đây là khai báo rút gọn của TypeScript constructor  kèm khai báo biến class luôn.
   * userService: là 1 biến của class UserComponent.
   * Khi khởi tạo Component này Angular sẽ dùng DI để khởi tạo Component này với service là params.
   */
  constructor(private userSevice: UserService) { }

  ngOnInit(): void {
    this.user = this.userSevice.getNewUser();
  }

  onNextUser(){
    this.user = this.userSevice.getNewUser();
  }
}
