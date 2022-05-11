import { Router } from "express";
import {
  verUsuarios,
  AltaUsuario,
  EncontrarUsuario,
  EliminarUsuario,
  ContarUsuario,
  ActualizarUsuarios,
} from "../Controllers/controlador";

const router = Router();

router.get("/Servidor/MostrarUsuarios", verUsuarios); //GET = Obtener información

router.post("/Servidor/AltaUsuarios", AltaUsuario);

router.get("/Servidor/ContarUsuarios", ContarUsuario);

router.put("/Servidor/ActualizarUsuario/:correo", ActualizarUsuarios);

router.get("/Servidor/EncontrarUsuario/:Id", EncontrarUsuario);

router.delete("/Servidor/EliminarUsuario/:Id", EliminarUsuario);

export default router;