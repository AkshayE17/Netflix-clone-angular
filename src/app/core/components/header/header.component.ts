import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   navList =[ "home","TV Shows","News&Popular","My List","Browse by Language"];

   @Input({required:true})  userImg:string='';
   @Input({required:true})  userName:string='';
}
