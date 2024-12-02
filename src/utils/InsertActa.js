import { getConnection } from "../database/ConnectionMongo.js";

const insertActa = async (acta) => {
  try {
    const database = await getConnection();
    const result = await database.collection("Actas").insertOne(acta); // Inserta el JSON en la colección "Actas"
    console.log("Acta insertada con éxito:", result.insertedId);
  } catch (error) {
    console.error("Error al insertar el acta:", error);
  }
};

export default insertActa;
