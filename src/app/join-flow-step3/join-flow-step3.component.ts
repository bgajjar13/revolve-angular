import { Component, OnInit } from '@angular/core';
import {NgbDatepickerConfig, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-join-flow-step3',
  templateUrl: './join-flow-step3.component.html',
  styleUrls: ['./join-flow-step3.component.scss']
})
export class JoinFlowStep3Component implements OnInit {
    closeResult = '';
    constructor(
      private modalService: NgbModal,
      private model: NgbDatepickerConfig
    ) { }

    ngOnInit(): void {
    }


    open(content:any) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
}
