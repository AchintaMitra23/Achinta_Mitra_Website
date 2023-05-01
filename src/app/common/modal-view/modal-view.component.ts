import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css', '../../../styles.css']
})
export class ModalViewComponent implements OnInit {

  @Input() public type: string | undefined;
  @Input() public techName: string | undefined;
  @Input() public noOfProj!: number | 0;
  @Input() public yrsOfExp!: number | 0;
  @Output() public onClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {

  }

  public onCloseSkillModal() {
    this.onClose.emit();
  }

}
