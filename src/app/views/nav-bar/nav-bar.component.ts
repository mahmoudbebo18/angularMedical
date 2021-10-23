import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentLang: string;
  constructor(public translate: TranslateService) {
    // if you find any thing in localStorage => return it && if not return EN
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    // use the returned lang value
    this.translate.use(this.currentLang);
  }
  // change the current lang Function
  changeLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }

  ngOnInit(): void {}
}
