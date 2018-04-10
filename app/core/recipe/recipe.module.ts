import { NgModule } from "@angular/core";
import { RecipeComponet } from "./recipe.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        RecipeComponet
    ],
    imports: [
        NativeScriptModule,
        CommonModule
    ]
})
export class RecipeModule {

}