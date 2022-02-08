import { Component, OnInit } from '@angular/core';
import { WorkFlow } from 'src/Models/work-flow';
import { WorkFlowService } from 'src/Services/work-flow.service';

@Component({
  selector: 'app-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.css'],
})
export class WorkFlowComponent implements OnInit {
  isOpened: boolean = false;
  isSaved: boolean = false;
  idNum: number = 0;
  branchID: number = 1;
  workFlow: WorkFlow[] = [];
  val1: string = '';
  val2: string = '';
  val3: string = '';
  checkbox: boolean = false;
  isActive: string = '';
  title = '';
  isEdit: boolean = false;
  length: number = 0;

  constructor(private wfService: WorkFlowService) {}

  ngOnInit(): void {
    this.wfService.getAllData().subscribe(
      (response) => {
        console.log('table resposne', response);
        this.workFlow = response;
        this.length = this.workFlow.length;
        this.idNum =
          this.workFlow[
            this.length - 1
          ].approvStpWorkflowTypesPK.workflowTypeId;
      },
      (err) => {
        console.log(err);
      }
    );
    if (!this.checkbox) {
      this.isActive = 'A';
    } else {
      this.isActive = 'I';
    }
  }

  addNewRow() {
    this.isSaved = false;
    this.isEdit=false;

    console.log('here');
    this.isOpened = !this.isOpened;
    if (!this.checkbox) {
      this.isActive = 'A';
    } else {
      this.isActive = 'I';
    }
  }

  save() {
    this.idNum = this.idNum + 1;
    this.isOpened = false;
    this.isSaved = true;
    this.isEdit = false;
    this.workFlow.push({
      approvStpWorkflowTypesPK: {
        branchId: this.branchID,
        workflowTypeId: this.idNum,
      },
      workflowTypeCode: this.val1,
      latinName: this.val2,
      arabicName: this.val3,
      active: this.isActive,
    });
    console.log(this.workFlow);
  }

  edit(id: any) {
    this.isEdit=true;
    console.log(id);
    this.workFlow.push({
      approvStpWorkflowTypesPK: {
        branchId: this.branchID,
        workflowTypeId: id,
      },
      workflowTypeCode: this.val1,
      latinName: this.val2,
      arabicName: this.val3,
      active: this.isActive,
    });
    // this.wfService.update(id, this.workFlow).subscribe(
    //   (response) => {
    //     console.log(this.workFlow);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  onRemoveRow(id: any) {
    this.wfService.delete(id).subscribe(
      (response) => {
        for (let i = 0; i < this.workFlow.length; ++i) {
          if (this.workFlow[i].approvStpWorkflowTypesPK === id) {
            this.workFlow.splice(i, 1);
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
