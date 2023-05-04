import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ReclamationModel } from 'src/app/Models/ReclamationModel';
import { ReclamationService } from 'src/app/Services/reclamation.service';
import { NgxCaptchaModule } from 'ngx-captcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  reclamation : ReclamationModel =new ReclamationModel();
  protected aFormGroup: FormGroup = new FormGroup({});
  reclamationStatus: string = "";
  constructor(private r: ReclamationService, private _router:Router, private formBuilder: FormBuilder){
    
  }
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  AddReclamations(){
    if (this.aFormGroup.controls['recaptcha'].value) {
      this.reclamationStatus = "Réclamation envoyée avec succès !";
      return this.r.AddReclamations(this.reclamation).subscribe(() => this._router.navigateByUrl("/contact"));
      
      } else {
      console.log("Veuillez valider le reCAPTCHA avant d'ajouter une réclamation.");
      this.reclamationStatus = 'error';
      return null;
      }
  }

  handleLoad() {
    console.log('reCAPTCHA loaded successfully!');
  }

  handleReset() {
    console.log("reCaptcha Reset");
  }
  
  handleExpire() {
    console.log("reCaptcha Expired");
  }
  
  handleSuccess(event: any) {
    console.log("reCaptcha Success");
  }
  

  siteKey:string="6LeoXtElAAAAAIJUl47GofOJN5pQ25QJ2CQJS_-q";
  EtatOptions=["sentiment_very_dissatisfied","sentiment_dissatisfied","sentiment_neutral","sentiment_satisfied","sentiment_very_satisfied"]
  StatutOptions=["EN_ATTENTE","EN_COURS","TRAITEE"]

}
