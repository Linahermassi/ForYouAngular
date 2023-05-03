import { Etat } from "./Etat"
import { Status } from "./Status"

export class ReclamationModel{
    reclamationId!:number
    category!:string
    creationDate!:Date
    details!:string
    etat!:Etat
    status!:Status
    title!:string
    iconeReclamation!:string
 
}
