import { Component, OnInit } from '@angular/core';
import { Abouts } from './abouts';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title ="about";
   aboutx: Abouts[];
   x: Abouts;
  constructor(private task :TaskService) {  
      this.getHeroes();
  }
  getHeroes(): void {
      this.task.getAbout().then( aboutx => this.aboutx = aboutx);    
  }
  search(value:number): any {
     this.aboutx.forEach(element => {
       if(value == element.id ){

         alert(JSON.stringify(element));
         this.x = element;
          return this.x;
       }       
       return null;
     });
    }
   

  ngOnInit() {
  }

}
