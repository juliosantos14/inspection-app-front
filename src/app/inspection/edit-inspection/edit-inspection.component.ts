import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/_services/inspection-api.service';

@Component({
  selector: 'app-edit-inspection',
  templateUrl: './edit-inspection.component.html',
  styleUrls: ['./edit-inspection.component.css']
})
export class EditInspectionComponent implements OnInit {

  inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;

  constructor(private service:InspectionApiService) { }

  @Input() inspection:any;
  id:number = 0;
  status:string="";
  comments:string="";
  inspectionTypeId!:number;

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspection.inspectionTypeId;
    this.statusList$ = this.service.obterTodosStatus();
    this.inspectionList$ = this.service.obterTodos();
    this.inspectionTypesList$ = this.service.obterTodosTypes();
  }

  addInspection(){
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    this.service.adicionar(inspection).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSucess = document.getElementById('add-success-alert');
      if(showAddSucess){
        showAddSucess.style.display= "block";
      }
      setTimeout(function(){
        if(showAddSucess){
          showAddSucess.style.display="none"
        }
      }, 4000);
    })
  }

  updateInspection(){
    var inspection = {
      id: this.id,
      status:this.status,
      comments:this.comments,
      inspectionTypeId:this.inspectionTypeId
    }
    var id:number = this.id;
    this.service.atualizar(id,inspection).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }
}
