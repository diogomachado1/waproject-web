import IUser from 'interfaces/models/user';
import IUserRole from 'interfaces/models/userRole';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class UserService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IUser>> {
    return this.apiService.get('/user', params);
  }

  public roles(refresh: boolean = false): Observable<IUserRole[]> {
    return this.apiService.get('/user/roles');
  }

  public save(model: IUser): Observable<IUser> {
    return this.apiService.post('/user', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/user/${id}`);
  }
}

const userService = new UserService(apiService);
export default userService;
