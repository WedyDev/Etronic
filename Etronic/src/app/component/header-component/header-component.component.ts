import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  constructor(){}

  ngOnInit(): void{ 
    
  }

  openMenu():void{
    document.getElementById('nav')?.classList.add('visible');
  }
  closeMenu(): void{
    document.getElementById('nav')?.classList.remove('visible');
  }


}
