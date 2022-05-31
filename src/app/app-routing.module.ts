import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlowOfIndividualComponent } from './flow-of-individual/flow-of-individual.component';
import { MinedBlocksComponent } from './mined-blocks/mined-blocks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'individualFlow', component: FlowOfIndividualComponent },
  { path: 'MinedBlocks', component: MinedBlocksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const RountingComponent = [
  HomeComponent,
  FlowOfIndividualComponent,
  MinedBlocksComponent,
];
