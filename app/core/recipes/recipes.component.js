"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./../../shared/services/data.service");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(dataService, routerExtentions) {
        this.dataService = dataService;
        this.routerExtentions = routerExtentions;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.recipes = this.dataService.getRecipes();
    };
    RecipesComponent.prototype.onTapRecipe = function (args) {
        this.routerExtentions.navigate(['recipe', (args.object.items[args.index]).RecipeId]);
    };
    RecipesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'mbl-recipes',
            templateUrl: 'recipes.component.html'
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.RouterExtensions])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjaXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWNpcGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHFFQUFtRTtBQUNuRSxzQ0FBNkQ7QUFLN0Qsc0RBQStEO0FBUS9EO0lBSUksMEJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFN0YsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLElBQUk7UUFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNuRyxDQUFDO0lBWlEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU1tQywwQkFBVyxFQUE0Qix5QkFBZ0I7T0FKL0UsZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSVJlY2lwZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaW50ZXJmYWNlcy9yZWNpcGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzL2dlc3R1cmVzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbWJsLXJlY2lwZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdyZWNpcGVzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2lwZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyByZWNpcGVzOiBPYnNlcnZhYmxlPElSZWNpcGVbXT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW50aW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWNpcGVzID0gdGhpcy5kYXRhU2VydmljZS5nZXRSZWNpcGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UYXBSZWNpcGUoYXJncykge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW50aW9ucy5uYXZpZ2F0ZShbJ3JlY2lwZScsICg8SVJlY2lwZT4oYXJncy5vYmplY3QuaXRlbXNbYXJncy5pbmRleF0pKS5SZWNpcGVJZF0pXHJcbiAgICB9XHJcbn0iXX0=