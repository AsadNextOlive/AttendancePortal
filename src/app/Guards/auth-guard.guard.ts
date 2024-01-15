import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { session } from '../Utils/session';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const protectedRouts: string[] = ['/', '/Admin-New-Employee','/Admin-Department','/Admin-Attendance','/Admin-Settings','/Admin-Employee','/Attendance-Department', '/Employee-Attendance'];
    if (protectedRouts.includes(state.url) && !session) {
      return this.router.createUrlTree(['/Login']);
    }
    return true;
  }
  
}
