const express = require("express");
const app = express();
const axios = require("axios");


const data = await axios.get()






 app.get("/posts/:idUsuario/comments", () => {
   try {
     const idUsuario = req.params.idUsuario;
     const respuesta = await axios.get(
       "https://jsonplaceholder.typicode.com/posts"
     );

     const publicaciones = respuesta.data.filter((post) => post.userId == idUsuario);

     const respuestaComentarios = await axios.get(
       "https://jsonplaceholder.typicode.com/comments"
     );




     const resultado = publicaciones.map((publicacion) => ({ 
        const comentariosPublicacion = respuesta.data.filter((comentario) => comentario.postId == comentario.Id );
        return {
            ...publicacion,
            comentarios: comentariosPublicacion
        } 
      }));

     res.send(publicacion);
   } catch (error) {
     console.error(error);
   }
 });










  app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000...");
  });
  