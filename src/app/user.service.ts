import { Injectable } from '@angular/core';

// cách khởi tạo này rất hay
export class User {
  constructor(
    public name: string,
    public isAuthorized: boolean = false ) { }
}

// TODO: get the user; don't 'new' it.
const alice:User = new User('Alice', true);
const bob:User = new User('Bob', false);
const hung:User = new User('hung'); // isAuthorized = false by default


@Injectable({
  // we declare that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class UserService {
  user:User = bob;

  getNewUser():User {
    /**
     * JavaScript ko định kiểu Type:
     *     ==: sẽ ko check type của 2 vế  => vd: 1=="1" sẽ trả về true ở javascript.
     *     ===: check type của 2 vế. nếu khác nhau sẽ trả về false
     *
     * TypeScript check type rồi nên ko bị lỗi này => nếu để 1=="1" sẽ báo lỗi lúc compile
     */

     //cách viết shortland of if then:
    return this.user = (this.user === bob) ? alice : bob; // trả về đan xen giữa alice và bob
  }
}
