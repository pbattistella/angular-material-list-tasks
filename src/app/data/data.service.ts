import { Injectable } from '@angular/core';

import { Post } from '../Post';
import { Observable, of } from 'rxjs';

@Injectable()

export class DataService {

  ELEMENT_DATA: Post[] = [
    {position: 0, title: 'Post One', category: 'Web Development', date_posted: new Date(), body: 'Body 1'},
    {position: 1, title: 'Post Tow', category: 'Android Studio', date_posted: new Date(), body: 'Body 2'},
    {position: 2, title: 'Post Trew', category: 'IOS Development', date_posted: new Date(), body: 'Body 3'},
    {position: 3, title: 'Post For', category: 'Docker', date_posted: new Date(), body: 'Body 3'},
  ]

  categories = [
    {value: 'Web-Development', viewValue: 'Web Development'},
    {value: 'Android-Development', viewValue: 'Android Development'},
    {value: 'IOS-Development', viewValue: 'IOS Development'},
    {value: 'Docker', viewValue: 'Docker'}
  ]

  constructor() { }

  getData(): Observable<Post[]>{
    return of<Post[]>(this.ELEMENT_DATA)
  }

  getCategories() {
    return this.categories
  }

  addPost(data: Post) {
    this.ELEMENT_DATA.push(data)
  }

  deletePost(index: number) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.filter(e => e.position != index)]
  }

  dataLength() {
    return this.ELEMENT_DATA.length
  }
}
