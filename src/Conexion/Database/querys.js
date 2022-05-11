export const querys = {
 verUsuarios: "SELECT * FROM Usuarios",
 RegistrarUsuario: "EXEC Registrar @Nombre = @NombreUsuario, @Apellido = @ApellidoUsuario, @Correo_Electronico = @CorreoElectronico, @Contraseña = @Contraseña",
 EncontrarUsuario: "SELECT * FROM Usuarios AS U WHERE U.IDUsuario = @Id",
 EliminarUsuario: "DELETE FROM Usuarios WHERE IDUsuario = @Id",
 ContarUsuarios: "SELECT COUNT(*) FROM Usuarios",
 ActualizarUsuario: "UPDATE Usuarios SET Nombre_Usuario = @Nombre, Apellido_Usuario = @Apellido, Correo_Electronico = @Correo, Contraseña = @Contraseña WHERE Correo_Electronico = @Correo",

};