"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var recipe_component_1 = require("./core/recipe/recipe.component");
var recipes_component_1 = require("./core/recipes/recipes.component");
var routes = [
    {
        path: "",
        redirectTo: "/recipes",
        pathMatch: "full"
    },
    {
        path: "recipe/:id",
        component: recipe_component_1.RecipeComponet
    },
    {
        path: "recipes",
        component: recipes_component_1.RecipesComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHNFQUFvRTtBQUVwRSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFVBQVU7UUFDdEIsU0FBUyxFQUFFLE1BQU07S0FDcEI7SUFDRDtRQUNJLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSxpQ0FBYztLQUM1QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzlCO0NBQ0osQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmVjaXBlQ29tcG9uZXQgfSBmcm9tIFwiLi9jb3JlL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWNpcGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29yZS9yZWNpcGVzL3JlY2lwZXMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgXG4gICAgICAgIHBhdGg6IFwiXCIsIFxuICAgICAgICByZWRpcmVjdFRvOiBcIi9yZWNpcGVzXCIsIFxuICAgICAgICBwYXRoTWF0Y2g6IFwiZnVsbFwiIFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgcGF0aDogXCJyZWNpcGUvOmlkXCIsIFxuICAgICAgICBjb21wb25lbnQ6IFJlY2lwZUNvbXBvbmV0IFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgcGF0aDogXCJyZWNpcGVzXCIsIFxuICAgICAgICBjb21wb25lbnQ6IFJlY2lwZXNDb21wb25lbnQgXG4gICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=