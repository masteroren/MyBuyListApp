import { RecipesComponent } from './recipes.component';
import { NgModule } from "@angular/core";
import { RecipesItemComponent } from './recipes-item/recipes-item.component';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesItemComponent
    ],
    imports: [
        NativeScriptModule,
        CommonModule
    ]
})

export class RecipesModule { }