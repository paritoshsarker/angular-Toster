import { Routes } from '@angular/router';
import { TosterComponent } from './components/toster/toster.component';
import { ModalComponent } from './components/modal/modal.component';
export const routes: Routes = [
    {path:"toster",component:TosterComponent},
    {path:"modal",component:ModalComponent}

];
