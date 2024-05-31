import { Component, ViewChild, ElementRef, VERSION } from '@angular/core';
import { AdminCosmeticService } from '../services/admin-cosmetic.service';
import { AdminCategoryService } from '../services/admin-category.service';
import { AdminCustomerService } from '../services/admin-customer.service';
import { AdminOrderService } from '../services/admin-order.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  totalCategories: number = 234;
  totalCustomers: number = 567;
  totalOrders: number = 890;
  totalCosmetics: number = 0;
  totalUncompletedOrders: number = 0;
  cosmetics: any;
  categories: any;
  customers: any;

  uncompletedOrders: any;
  errMessage: string = '';

  orders: any;
  chart: any;

  constructor(
    public _service: AdminCosmeticService,
    public category_service: AdminCategoryService,
    public customer_service: AdminCustomerService,
    public order_service: AdminOrderService
  ) {
    this._service.getCosmetics().subscribe({
      next: (data) => {
        // Lấy danh sách các Cosmetics
        this.cosmetics = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.category_service.getCategories().subscribe({
      next: (data) => {
        // Lấy danh sách các Categories
        this.categories = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.customer_service.getCustomers().subscribe({
      next: (data) => {
        // Lấy danh sách các Customers
        this.customers = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.order_service.getOrders().subscribe({
      next: (data) => {
        // Lấy danh sách các Orders
        this.orders = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });

    this.order_service.searchUncompletedOrder().subscribe({
      next: (data) => {
        // Lấy danh sách các Orders
        this.uncompletedOrders = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  totalCosmetic(data: any) {
    return this.totalCosmetics = data.length;
  }

  totalCategory(data: any) {
    return this.totalCategories = data.length;
  }

  totalCustomer(data: any) {
    return this.totalCustomers = data.length;
  }

  totalOrder(data: any) {
    return this.totalOrders = data.length;
  }

  totalUncompletedOrder(data: any) {
    return this.totalUncompletedOrders = data.length;
  }
}