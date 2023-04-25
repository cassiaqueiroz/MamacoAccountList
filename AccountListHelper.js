({
    //using method from MamacoAccounts Apex Class
	getAccounts : function(component) {
		
        let action = component.get("c.getAccounts");
      
        //using 'response' to recieve server confirmation through setCallback
        action.setCallback(this,function(response){
        let state = response.getState();
            console.log(state);
            
            if(state == "SUCCESS"){
                component.set("v.accounts", response.getReturnValue());
                console.log(response.getReturnValue());

            }
        
    }); 
        //enqueueing server actions
        $A.enqueueAction(action);
    }
})
