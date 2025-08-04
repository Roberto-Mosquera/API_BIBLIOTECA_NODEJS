import app from './app.js';

const port = app.get("PORT");

app.listen(port,()=>{
    console.log(`Iniciando servidor en: http://localhost:${port}`);
});