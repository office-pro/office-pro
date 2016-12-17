import { Component } from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: './Member.component.html',
  styleUrls: ['./Member.component.css']
})
export class MemberComponent {
  title = 'I am Hero';
  SelectedHero : Hero;
  zero: Zero[] = [{
      id: 1,
      name:'Shael',
      mobile:7021018684
  },{
       id : 2,
       name : 'Dayanand',
       mobile : 9867461431  
    }]
  hero: Hero[] = [{
      id : 1,
      name : 'Shashikant',
      mobile : 9967901834
    },
    {
       id : 2,
       name : 'Dayanand',
       mobile : 9867461431  
    },
    {
        id : 3,
        name : 'Shubhangini',
        mobile : 7208855392
    },
    {
        id: 4,
        name : 'Gautami',
        mobile : 7588456474
    }];
   Save(her : Hero) : void {
     for(var i=0;i < this.hero.length;i++) {
         alert(this.hero[i].id)
         if (this.hero[i].id == her.id){
             alert(JSON.stringify(this.hero[i].id));
             alert(JSON.stringify(her));
             this.hero[i] = her;
             alert(JSON.stringify(this.hero))
         }
         }
     

  
  }  

  showPanel(Member:Hero) :void {
       this.SelectedHero = Member;
  }
}
export class Hero {
   id: number;
   name: string;
   mobile: number;
}
export class Zero {
   id: number;
   name: string;
   mobile: number;
}

