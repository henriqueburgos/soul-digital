import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = 'http://localhost:5001/soul-digital-4a4a4/us-central1/api';
  adminUrl = `${this.baseUrl}/admin`;
  
  
  constructor(private http: HttpClient, private authService: AuthService
    ) { }

  getAdmins(){
    return this.http.get<Admin[]>(this.adminUrl, {
      headers: { Authorization : `Bearer ${this.authService.userToken}`}
    });
  }

  addAdmin(admin: Admin){ //POST
    return this.http.post(this.adminUrl, admin, {
      headers:{Authorization : `Bearer ${this.authService.userToken}`}
    });

  }

  updateAdmin(admin: Admin){
    return this.http.put(`${this.adminUrl}/ ${admin.uid}`, admin,{ headers: { Authorization : `Bearer ${this.authService.userToken}`}})

  }

  deleteAdmin(admin: Admin){
    return this.http.delete(`${this.adminUrl}/ ${admin.uid}`,{
     headers: { Authorization : `Bearer ${this.authService.userToken}`}})


  }
}