import { Component,OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  constructor(private student:StudentsService){}
  dtOptions:DataTables.Settings ={};

  studentData:any =[];

  ngOnInit():void{
    this.dtOptions = {
      pagingType:'full_numbers',
      pageLength:5,
      processing:true,
    
      lengthMenu:[5,10,15,50]
    }
    this.student.getAllStudent().subscribe((allData) =>{
      console.log(allData)
      this.studentData = allData;
    });


  }

  deleteStudent(id:any){

    this.student.deleteStudent(id).subscribe((result) =>{
      this.ngOnInit();
      console.log(result);

    });

  }

}
