import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../../shared/services/data.service";
import { Subscription } from "rxjs/Subscription";
import { IRecipe } from "../../shared/interfaces/recipe";

import { StackLayout } from "ui/layouts/stack-layout";
import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";

@Component({
    moduleId: module.id,
    selector: 'mbl-recipe',
    templateUrl: 'recipe.component.html'
})
export class RecipeComponet implements OnInit, OnDestroy {

    private sub: Subscription;

    public recipe: IRecipe = {
        RecipeId: null,
        RecipeName: null
    };

    constructor(
        private dataService: DataService, 
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.dataService.getRecipe(this.activatedRoute.snapshot.params['id']).subscribe((recipe: IRecipe) => {
            this.recipe = recipe;
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}