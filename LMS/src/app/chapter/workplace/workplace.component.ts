import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {
  submit(){
    var popup = document.getElementById("myPopup");
     popup.classList.toggle("show");
  }
  displayVideoModal ='none';

  ngOnInit() {
  }

}
