export class Validate{
     
    PASS_REGEX= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/;
    MAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    constructor() { }

    validateName(name) {
        if(name==null) {
          return false;   
        }
        else {
            return true;
        } 
      }

      validateEmail(email) {
        if(!this.MAIL_REGEX.test(email)) {
            return false;
            console.log("reached at email");
        }
        else {
            return true;
        }
      }
    
      validateAddress(address){
          if(address==null) { 
              return false;
            }
        else {
            return true;
        }
      }
       
      validateDate(date) {
        if(!date) {
            return false;
        }
        else { 
            return true;
        }
      }

      validatePass(password) {
        if(this.PASS_REGEX.test(password)) {
          return true;
        }
        else { 
            return false; 
        }
      }
      
      validateContact(contact) { 
        if(contact!=10) { 
            return false; 
        }
        else {
            return true;
        }
      }

      validateAdhaar(adhar) {
          if(adhar!=10) {
              return false;
          }
          else {
              return true;
          }
      }

      validatemstatus(mstatus) {
          if(mstatus==null) {
              return false;
          }
          else {
              return true;
          }
      }

      validatehqualification(hqualification) {
          if(hqualification==null) {
              return false;
          }
          else {
              return true;
          }
      }

      
}