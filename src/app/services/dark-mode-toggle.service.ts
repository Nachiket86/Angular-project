import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeToggleService {

   private darkMode = new BehaviorSubject<boolean>(false);
   public isDarkMode = this.darkMode.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.setDarkMode(savedTheme === 'dark');
    }
    else{
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setDarkMode(prefersDark);
    }
   }

   setDarkMode(isDark: boolean){
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark': 'light');
    this.darkMode.next(isDark);
   }

   toggleDarkMode(){
    this.setDarkMode(!this.darkMode.value);
   }
}
