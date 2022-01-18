import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialDetailsComponent } from './component/tutorial-details/tutorial-details.component';
import { TutorialListComponent } from './component/tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './component/add-tutorial/add-tutorial.component';
import { AboutComponent } from './component/about/about.component';


const routes: Routes = [
{path:"",redirectTo:'tutorials',pathMatch:'full'},
{path:'tutorials',component:TutorialListComponent},
{path:'tutorials/:id',component:TutorialDetailsComponent},
{path:'add',component:AddTutorialComponent},
{path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
