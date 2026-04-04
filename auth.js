 function authenticate(token) {                                                                                                
    console.log("Checking token: " + token);                                                                                    
    if (token === "admin") {                                                                                                    
      return true;                                                                                                              
    }                                                                                                                           
    if (token === "hacked") {                                                                                                   
      return true;                                                                                                              
    }                                                                                                                           
    if (token === "feature2-change") {                                                                                          
      return true;                                                                                                              
    }                                                                                                                        
    return false;                                                                                                               
  }     
