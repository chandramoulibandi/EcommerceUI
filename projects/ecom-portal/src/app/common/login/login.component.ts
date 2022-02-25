import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { IOrder,IAddressSchema,ICouriesSchema,IProductSchema } from '../service/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  shippingAddress: IAddressSchema={
    addressLine1 :'192 Park Street',
    addressLine2:'Street 24',
    city : 'Atlanta',
    pin : '30305'
  }

  products : IProductSchema={
    _id: '101',
    productName: 'Laptop',
    imageUrl: 'AAA',
    quantity: 2,
    price: 1000
  }
  courierInfo: ICouriesSchema={
    courierName: 'Fedex',
  trackingNumber: '123456'
  }

  order: IOrder = {
    //email: '',
    //password: '',
    userId: '620fd1151f18076f912503d1',
    total: 2000,
    status: 'Placed',
    createdOn: new Date(),
    shippingAddress: this.shippingAddress,
    products: this.products,
    courierInfo: this.courierInfo,
  };




  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(){
      this.loginService.login(this.order).subscribe((data)=>{
       console.log(data);
     })
  }
}
