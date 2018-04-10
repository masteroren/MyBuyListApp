"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getRecipes = function () {
        return this.http.get("http://192.168.1.6/mybuylistwebapi/api/recipes");
    };
    DataService.prototype.getRecipe = function (id) {
        return this.http.get("http://192.168.1.6/mybuylistwebapi/api/recipes/" + id);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUszQztJQUVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBRXBDLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFZLGdEQUFnRCxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxFQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvREFBa0QsRUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQVpRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsV0FBVyxDQWF2QjtJQUFELGtCQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBJUmVjaXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZWNpcGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWNpcGVzKCk6IE9ic2VydmFibGU8SVJlY2lwZVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVJlY2lwZVtdPihgaHR0cDovLzE5Mi4xNjguMS42L215YnV5bGlzdHdlYmFwaS9hcGkvcmVjaXBlc2ApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY2lwZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJUmVjaXBlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYGh0dHA6Ly8xOTIuMTY4LjEuNi9teWJ1eWxpc3R3ZWJhcGkvYXBpL3JlY2lwZXMvJHtpZH1gKTtcclxuICAgIH1cclxufSJdfQ==