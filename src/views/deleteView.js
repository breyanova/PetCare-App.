
import * as dashBoardService from '../services/dashboardService.js';


export const deleteView = async (ctx) => {

    try {
   
        let confirmed =  confirm('Do you want to delete?')

        if(confirmed){
            await dashBoardService.remove(ctx.params.animalId);
            ctx.page.redirect('/')

        }
 
       
        
    } catch (error) {
        alert(err)
        
    }

  
    
}

