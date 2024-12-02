import { MongoClient } from "mongodb";

const mongoUrl = "mongodb+srv://a22310435:0QCqNShlfXj5D7Gb@cluster0.rsss4.mongodb.net/ProyectoWEBBD?retryWrites=true&w=majority";

const getConnection = async () => {
  try {
    const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db(); // Retorna la base de datos por defecto especificada en el string
  } catch (error) {
    console.error("Error al conectar con MongoDB Atlas:", error);
    throw error;
  }
};

export { getConnection };
