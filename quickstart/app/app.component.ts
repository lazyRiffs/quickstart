import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: '<div>YO PRIVYET</div>'
    //`
    //    <h1>{{title}}</h1>
    //    <h2>{{hero.name}} details!</h2>
    //    <div><label>ID:</label>{{hero.id}}</div>
    //    <div>
    //        <label>Name:</label>
    //        <input [(ngModel)]="hero.name" placeholder="name">
    //    </div>
    //    `
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id : 1,
        name: 'Windstorm'
    };
}
