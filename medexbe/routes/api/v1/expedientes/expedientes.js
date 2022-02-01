const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.status(200).json(
    {
        endpoint: 'expedientes',
        updates: new Date(2022,0,19,22,41,00),
        author: 'pabloherrera405@gmail.com'
        
    }
    );
}); //GET /

router.post('/new', async (req, res) =>{
    const{ identidad, fecha, descripcion, observacion, registros, ultimaActualizacion} = req.body;

    res.status(200).json(
        {
             status: 'ok', 
             recieved: {
                 identidad, 
                 fecha, 
                 descripcion,
                 observacion, 
                 registros, 
                 ultimaActualizacion
                }
            });

}); //POST /new

//router.post();
//router.put();
//router.delete();



module.exports = router;
