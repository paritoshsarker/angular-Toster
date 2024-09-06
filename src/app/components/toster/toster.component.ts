import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
	
import { ToastrService, ToastNoAnimation } from 'ngx-toastr';
@Component({
  selector: 'app-toster',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './toster.component.html',
  styleUrl: './toster.component.css'
})
export class TosterComponent {

  constructor(private toster:ToastrService){}

showSuccess() {
  this.toster.success("success","Opps");
}

}
