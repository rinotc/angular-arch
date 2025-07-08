import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirstName, LastName, UserId} from './user.brands';
import {User} from './user';
import {firstValueFrom, map} from 'rxjs';

@Injectable()
export class UserRepository {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  fetchById(userId: UserId): Promise<User> {
    const obs = this.httpClient.get<UserResponse>(`/api/users/${userId}`)
      .pipe(
        map(res => User.fromJson(res) )
      )
    return firstValueFrom(obs);
  }
}

interface UserResponse {
  id: UserId;
  firstName: FirstName;
  lastName: LastName;
}
