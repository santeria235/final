import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../signin/user';
import { InvestService } from '../../../service/invest.service';
import { InvestInfo } from './InvestInfo';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input('loggedInUser') loggedInUser : User;
  @Input('pageNo') pageNo: number;

  // 투자 결제용 객체
  investInfo : InvestInfo = new InvestInfo();

  isChecked : boolean;
  constructor(private investService : InvestService) { }

  ngOnInit() {
    this.investInfo.u_id = this.loggedInUser.u_id;
    this.investInfo.d_pageno = this.pageNo;

  }

  invest() {
    if (this.loggedInUser.u_money - this.investInfo.i_investmoney < 0) {
        alert("투자할 수 있는 보유금액이 부족합니다.")
    } else if (!this.isChecked) {
        alert("투자금액과 상품정보를 다시한번 확인하시고 체크 버튼을 눌러주세요.")
    } else {
      this.investService.investItem(this.investInfo).subscribe(() => {
        alert("투자하였습니다. 마이페이지에서 나의 투자내역을 확인하실 수 있습니다.");
        location.reload();
      });
    }

  }


}
