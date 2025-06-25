import express from "express";
import cors from 'cors';
import routerLeague from "./routes/league";
import routerTvrights from "./routes/tv_rights";
import routerLeagueName from "./routes/league_name";



const app = express();
const PORT = process.env.PORT || 3250;

app.use(cors());
app.use(express.json());

app.use('/api/league', routerLeague)
app.use('/api/tvrights', routerTvrights)
app.use('/api/league-name', routerLeagueName)




app.listen(PORT, () =>{
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📡 API disponible en http://localhost:${PORT}/api/test`);        
})













// app.get('/', (req,res) =>{
//     res.json({
//         message: 'Hello World',
//         status: 'success',
//         timestamp: new Date().toISOString()
//     });
// });

// app.get('/api/test', (req , res) =>{
//     res.json({
//         message: 'API funcionando correctamente',
//         version: '1.0.0',
//         endpoints: [
//             'GET / - Hello World',
//             'GET /api/test - Test endpoint '
//         ]
//     });
// })


