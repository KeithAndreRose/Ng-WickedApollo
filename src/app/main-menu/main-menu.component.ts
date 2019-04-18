import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  mainMenu: HTMLElement;
  menuList = ['Play Now', 'Exit'];
  menuActiveIndex = 0;

  constructor(private elRef:ElementRef) {
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
    this.toggleActiveMenuItem(index);
    direction === 'UP' ? index-- : index++;

    if(index > menuLength)
      index = 0;
    else if(index < 0)
      index = menuLength;

    this.toggleActiveMenuItem(index);
  }

  toggleActiveMenuItem(index) {
    this.mainMenu.children[index].classList.toggle('active');
    this.menuActiveIndex = index;
  }

  menuSelection(index){
    console.log((this.mainMenu.children[index] as HTMLUListElement).innerText)

  }

}
