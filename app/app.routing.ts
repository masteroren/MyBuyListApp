import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { RecipeComponet } from "./core/recipe/recipe.component";
import { RecipesComponent } from "./core/recipes/recipes.component";

const routes: Routes = [
    { 
        path: "", 
        redirectTo: "/recipes", 
        pathMatch: "full" 
    },
    { 
        path: "recipe/:id", 
        component: RecipeComponet 
    },
    { 
        path: "recipes", 
        component: RecipesComponent 
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }