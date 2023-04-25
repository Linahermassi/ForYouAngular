import { Etat } from "./Etat"
import { Status } from "./Status"

export class ReclamationModel{
    reclamation_id!:number
    category!:string
    creationDate!:Date
    details!:string
    etat!:Etat
    status!:Status
    title!:string

}
