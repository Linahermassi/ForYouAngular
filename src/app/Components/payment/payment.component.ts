import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  [key: string]: any;
  constructor(private http: HttpClient) {}
  chargeCreditCard() {
    let form = document.getElementsByTagName("form")[0];
    // 2. Créer un token avec les informations de la carte de crédit
    (<any>window).Stripe.card.createToken({
      number: form['cardNumber'].value,
      exp_month: form['expMonth'].value,
      exp_year: form['expYear'].value,
      cvc: form['cvc'].value
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
      } else {
        console.log(response.error.message);
      }
    });
  }
  chargeCard(token: string) {
    const headers = new HttpHeaders({'token': token, 'amount': ''+100});
  this.http.post('http://localhost:8081/foryou/payment/charge',  {}, {headers: headers})
    .subscribe(resp => {
      console.log(resp);
    })

  }


}
