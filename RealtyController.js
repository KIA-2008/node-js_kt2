import Realty from "./Models/Realty.js";
import fileService from "./fileService.js";

class RealtyController {
    async getRealts(req, res) {
        try {
            const realts = await Realty.find();
            res.json(realts);
            console.log(realts);
        } catch (error) {
            console.log("Ошибка при получении недвижемостей: " + error);
        }
    }

    async addRealty(req, res) {
        try {
          
           let fileName = null;
            console.log(req.files.image);
            
           if(req.files && req.files.image){
            fileName  =   await  fileService.saveFile(req.files.image)
            if(!fileName){
             return res.send("Ошибка при добавлении файла "  , fileName )
            }
    
            
           }
          
          const { title, price, city, address, floors, rooms } = req.body;
          const newRealty = await Realty.create({
            title,
            price,
            city,
            address,
            floors,
            rooms,
            image: fileName
          });
    
          await newRealty.save();
          res.send("Недвижемость успешно добавленно!");
        } catch (error) {
          
          console.log("Ошибка при добавлении недвижемости: " + error);
        }
      }

      async deleteRealty(req , res){
        try{
               const {id} = req.params
               console.log(id);
               
               const realty = await Realty.findByIdAndDelete(id) 
               res.send("Недвижемость успешно удалено")
           }catch(error){
               console.log("Ошибка при удалении недвижемости: " + error);
           }
    }

    async putRealty(req , res){
        try {
                const {id} = req.params
                const {title , price, city, address, floors, rooms} = req.body
        
                const updateRealty = await Realty.findByIdAndUpdate(id, {title , price, city, address, floors, rooms})
                
            } catch (error) {
                console.log("Ошибка, не удалось выполнить команду" + error); 
            }
    }

    async patchRealty(req , res){
        try {
           const {id} = req.params
           console.log(id);
       
           const {title , price, city, address, floors, rooms} = req.body
           const updateRealty = await Realty.findByIdAndUpdate(id ,{title , price, city, address, floors, rooms})
           if(!updateRealty){
               res.send("Такой недвижемости не существует!")
           }
           res.send("Данные успешно изменены")        
           } catch (error) {
               console.log("Ошибка, не удалось выполнить команду" + error); 
           }
   }
}

export default new RealtyController();