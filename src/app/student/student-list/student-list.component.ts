import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';
import * as $ from 'jquery';

// declare var $: any;


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    students: Student[] = [];
    public showLoader = true;

    constructor(private studentservice: StudentService) { }

    ngOnInit() {
        // $(document).ready(function() {
        //     alert('I am Called From jQuery');
        //   });


         
        

        const studentObservable = this.studentservice.getStudents();
        studentObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
            this.showLoader = false;
        });
    }

    onBtnClick() {
        let name = $('#name').val();
    //    let a = $('#name').animate({scrollLeft: 100}, 500);


       $("#name").animate({height: "50px", width: '500px'})
        // console.log(a)
        
    }


    
}