import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Logincomponnet } from './logincomponnet/logincomponnet';
import { Signupcomponent } from './signupcomponent/signupcomponent';
import { Forgetcomponent } from './forgetcomponent/forgetcomponent';

const routes: Routes = [
    {
    path:'',
    component:Logincomponnet
  },
  {
    path:'create',
    component:Signupcomponent
  },
  {
    path:'forget',  
    component:Forgetcomponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
