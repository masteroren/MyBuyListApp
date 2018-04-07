import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { RecipeComponet } from "./core/recipe/recipe.component";

const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/recipe", 
        pathMatch: "full" 
    },
    { 
        path: "recipe", 
        component: RecipeComponet 
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }