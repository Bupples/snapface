import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  public getToken(): string {
    return this.token;
  }

  public login(): void {
    this.token = 'MyFakeToken';
  }
}
