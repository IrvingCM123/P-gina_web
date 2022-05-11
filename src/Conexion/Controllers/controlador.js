import { getConnection, sql, querys } from "../Database"

export const verUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.verUsuarios);
    console.log(result.recordset);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


export const AltaUsuario = async (req, res) => {
  const { Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña } = req.body

  if (Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null) {
    return res.status(400).json({ message: "Por favor llena todos los campos" });
  }

  try {
    const pool = await getConnection();

    await pool.request()
      .input("NombreUsuario", sql.VarChar, Nombre_Usuario)
      .input("ApellidoUsuario", sql.VarChar, Apellido_Usuario)
      .input("CorreoElectronico", sql.VarChar, Correo_Electronico)
      .input("Contraseña", sql.VarChar, Contraseña)
      .query(querys.RegistrarUsuario);

    res.json({ Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const EncontrarUsuario = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection()

  const result = await pool
    .request()
    .input("Id", sql.Int, Id)
    .query(querys.EncontrarUsuario)

  res.send(result.recordset[0])
}

export const EliminarUsuario = async (req, res) => {
  const { Id } = req.params;

  const pool = await getConnection()

  const result = await pool
    .request()
    .input("Id", sql.Int, Id)
    .query(querys.EliminarUsuario)

  res.sendStatus(204)
}


export const ContarUsuario = async (req, res) => {

  const pool = await getConnection()

  const result = await pool
    .request()
    .query(querys.ContarUsuarios)
  res.json(result.recordset[0][''])
}

export const ActualizarUsuarios = async (req, res) => {
  const { Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña } = req.body
  const { correo } = req.params

  if (Nombre_Usuario == null || Apellido_Usuario == null || Correo_Electronico == null || Contraseña == null) {
    return res.status(400).json({ message: "Por favor llena todos los campos" });
  }

  try {
    const pool = await getConnection();

    await pool.request()
      .input("Nombre", sql.VarChar, Nombre_Usuario)
      .input("Apellido", sql.VarChar, Apellido_Usuario)
      .input("Correo", sql.VarChar, correo)
      .input("Contraseña", sql.VarChar, Contraseña)
      .query(querys.ActualizarUsuario);
    res.json({ Nombre_Usuario, Apellido_Usuario, Correo_Electronico, Contraseña });

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}