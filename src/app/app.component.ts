import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lengthField = new FormControl(Validators.minLength(8));
  length = 8;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  showInfo = false;
  onCopyAlert = false;


  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  onCopyText() {
    this.onCopyAlert = !this.onCopyAlert;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const symbols = '!#$%&/()=?¡¿*@';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i= 0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onCopyPass(){
    navigator.clipboard.writeText(this.password);
    this.onCopyText();
  }
}
