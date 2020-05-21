import { Component, OnInit, Input } from '@angular/core';
import { ReturnMessage } from 'src/app/models/return-message';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {

  @Input() returnMessage : ReturnMessage;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Status : any;
  @Input() MessageUser : any;
  @Input() Result : any;
  @Input() NumbersUser : any;
  @Input() NumbersResult : any;
  @Input() NumbersHit : any;

}
