import { Component } from "@angular/core";
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    // ngFor is a directive that modifies the structure of the Dom
    template: `
            <h2>{{ courses.length }}: {{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
            <button class="btn btn-primary">Save</button>
    ` 
})
export class CoursesComponent{
    title = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}