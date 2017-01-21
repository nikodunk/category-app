import { Routes } from '@angular/router'
import { DetailsStartComponent } from './details-start.component'
import { DetailsComponent } from './details.component'

export const DETAILS_ROUTES: Routes = [
	{ path: '', component: DetailsStartComponent },
	{ path: ':id', component: DetailsComponent }
]