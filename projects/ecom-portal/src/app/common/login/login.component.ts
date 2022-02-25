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
    addressLine1 :'',
    addressLine2:'',
    city : '',
    pin : ''
  }

  products : IProductSchema={
    _id: '101',
    productName: '',
    imageUrl: 'AAA',
    quantity: 0,
    price: 0
  }
  courierInfo: ICouriesSchema={
    courierName: '',
  trackingNumber: ''
  }

  order: IOrder = {
    //email: '',
    //password: '',
    userId: '620fd1151f18076f912503d1',
    total: 0,
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
