import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mainMenu: HTMLElement;
  menuList = ['Play Now','Editor', 'Exit'];
  menuActiveIndex = 0;
  constructor(private router:Router) {
  }

  ngOnInit() {
    this.mainMenu = document.getElementById('main-menu');
  }

  ngAfterViewInit() {
    this.toggleActiveMenuItem(this.menuActiveIndex);

    console.log()
    document.addEventListener('keydown',(e)=>{
      if(e.key === 'ArrowUp')
        this.cycleMenu('UP')
      else if(e.key === 'ArrowDown')
        this.cycleMenu('DOWN')
      if(e.key === "Enter")
        this.menuSelection(this.menuActiveIndex);
    })
  }

  cycleMenu(direction) {
    let index = this.menuActiveIndex;
    let menuLength = this.mainMenu.getElementsByTagName('li').length - 1;
    this.untoggleActiveMenuItem(index);
    direction === 'UP' ? index-- : index++;

    if(index > menuLength)
      index = 0;
    else if(index < 0)
      index = menuLength;

    this.toggleActiveMenuItem(index);
  }

  untoggleActiveMenuItem(index){
    this.mainMenu.children[index].classList.remove('active');
  }

  toggleActiveMenuItem(index) {
    (this.mainMenu.children[index].children[0] as HTMLAudioElement).play();
    this.mainMenu.children[index].classList.add('active');
    this.menuActiveIndex = index;
  }

  menuSelection(index){
    const selection = (this.mainMenu.children[index] as HTMLUListElement).innerText;
    (this.mainMenu.children[index].children[0] as HTMLAudioElement).play();

    switch(selection){
      case 'Play Now':
        this.router.navigateByUrl('Play');
        break;
      case 'Editor':
        this.router.navigateByUrl('Editor');
        break;
      case 'Exit':
        window.close();
        break;
    }

  }

}
