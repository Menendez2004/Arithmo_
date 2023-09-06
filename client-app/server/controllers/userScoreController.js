    const Scores = require('../models/scores')

    module.exports = {

        create(req, res){
            
            const scores = req.body;
            
            Scores.create(scores, (err, id) =>{
                if(err){
                    return res.status(501).json({
                        success: false,
                        message: 'Error con guardar la puntuacion del usuario',
                        error: err
                    })
                }
                res.status(201).json({
                    success : true ,
                    message:'Puntuación creada correctamente',
                    data: `${id}`
                })

            })
        },

        
    }