const slotModel=require('../model/slotschedule.model')

class slotservice{
    static async Slotschedule(userId,doctorId,Prescription,Imagelink){
        try{
            const slot = new slotModel({userId,doctorId,Prescription,Imagelink});
            return await slot.save()
            
        }
        catch(err){
            throw(err);

        }
    
    }
    static async getslot(slotId){
        try{
            
            const slot = await slotModel.findById(slotId);
            if (!slot) {
                res.json({status:'false',slot:'No Such Slot Found'})
                return null; // Or throw an error if you prefer
              }
            
              return slot;
              
        }
        catch(error){
            console.error('Error:', error);
            throw error; // Handle or rethrow the error as needed
        }
    }
}
module.exports = slotservice