import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/_services/inspection-api.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList:any=[];

  inspectionTypesMap:Map<number, string> = new Map();

  constructor(private service:InspectionApiService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.service.obterTodos();
    this.inspectionTypesList$ = this.service.obterTodosTypes();
    this.refreshInspectionTypesmMap();
  }

  modalTitle: string = "";
  activateAddEditInspectionComponent: boolean = false;
  inspection:any;

  modalAdd(){
    this.inspection={
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  refreshInspectionTypesmMap(){
    this.service.obterTodosTypes().subscribe(data => {
      this.inspectionTypesList = data;

      for(let i=0; i< data.length; i++){
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })
  }
}
