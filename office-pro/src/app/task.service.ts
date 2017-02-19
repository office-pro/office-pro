import { Abouts } from './about/abouts';
import { abouts } from './about/about-mock';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService{

    getAbout() :Promise<Abouts[]> {
      return Promise.resolve(abouts);
    }


}