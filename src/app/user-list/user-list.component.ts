import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
    selector: 'app-user-list',
    template: `<button (click)="addRandomUser()">Add Random User</button>
               <div>
                 <ul>
                   <li *ngFor="let user of users">
                   {{user.name}}({{user.age}})
                   </li>
                 </ul>
               </div>`,
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    public users: User[];

    constructor(private userService: UserService) {
        this.users = [];
    }

    ngOnInit() {
        this.users = this.userService.getUsers();
    }
    addRandomUser() {
        const newUser = {
            name: 'User' + Math.floor((Math.random() * 1000) + 1).toString(),
            age: Math.floor((Math.random() * 100) + 1)
        };
        this.userService.addUser(newUser);
    }
}
