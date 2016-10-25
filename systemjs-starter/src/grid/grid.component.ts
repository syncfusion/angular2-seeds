import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: 'src/grid/grid.component.html',
})
export class GridComponent {
    public gridData: any;
    constructor() {
        this.gridData = [{
            OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
            OrderDate: new Date(8364186e5), Freight: 32.38
        },
        {
            OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
            OrderDate: new Date(836505e6), Freight: 11.61
        },
        {
            OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
            OrderDate: new Date(8367642e5), Freight: 65.83
        },
        {
            OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
            OrderDate: new Date(8367642e5), Freight: 41.34
        },
        {
            OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
            OrderDate: new Date(8368506e5), Freight: 51.3
        }];
    }
}
