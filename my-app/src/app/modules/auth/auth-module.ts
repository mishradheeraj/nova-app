import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Logincomponnet } from './logincomponnet/logincomponnet';
import { Signupcomponent } from './signupcomponent/signupcomponent';
import { Forgetcomponent } from './forgetcomponent/forgetcomponent';

@NgModule({
  declarations: [],
  imports: [Logincomponnet, Signupcomponent, Forgetcomponent, CommonModule, AuthRoutingModule],
})
export class AuthModule {}
