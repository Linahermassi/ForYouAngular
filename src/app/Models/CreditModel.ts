import { StateCredit } from "./StateCredit"


export class CreditModel{
  creditId!:number
  amount!:number
  interestRate!:number
  startDate!:Date
  endtDate!:Date
  refundAmount!:number
  nb_years!:number
  rentability!:number
  type!:string
  status!:StateCredit


}
