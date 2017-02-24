import { Routes } from "@angular/router";


import { SignUpComponent } from '../sign-up/sign-up.component';
import { DetailsComponent } from '../comparison/details/details.component';


export const COMPARISON_ROUTES: Routes = [
	{ path: '', component: SignUpComponent},
	{ path: ':id', component: DetailsComponent }
]