import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {
    private users: User[];

    constructor() {
        this.users = [{
            name: 'User1',
            age: 18
        }, {
            name: 'User2',
            age: 20
        }];
    }

    getUsers(): User[] {
        return this.users;
    }
    addUser(user: User) {
        this.users.push(user);
    }
}
