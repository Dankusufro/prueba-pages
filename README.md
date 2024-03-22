<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitación a completar formulario</title>
    <style>
        body {
            margin: 0;
            padding: 10%;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        table {
            width: 100%;
        }

        td {
            text-align: center;
        }

        h2 {
            color: #343A40;
            font-size: 36px;
            font-family: Roboto, "Comic Sans MS";
            font-weight: 800;
            margin: 20px 0;
        }

        p {
            font-size: 18px;
            color: #343A40;
            line-height: 1.9;
            margin: 10px 0;
        }

        img {
            display: block;
            margin: 0 auto;
        }

        .content {
            background-color: #ffffff;
            padding: 40px 20px 30px 20px;
        }

        .cta-button {
            display: inline-block;
            padding: 12px 24px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            background-color: #9bd63e;
            color: #ffffff;
            border-radius: 5px;
        }

        .last-image {
            float: right;
        }
    </style>
</head>

<body>
<table>
    <tr>
        <td align="center" bgcolor="#3498db">
            <table class="content" width="600">
                <tr>
                    <td>
                        <img class="logo" src="https://raw.githubusercontent.com/Dankusufro/hola/main/LogoHapp.png"
                             alt="Happy Rent Logo" width="425">

                        <h2>¡Bienvenido a Happ Rent!</h2>
                        <p>Hola ${user.username},</p>
                        <p>Gracias por registrarte en Happ Rent. Para completar tu registro,</p>
                        <p>haz clic en el siguiente enlace de verificación:</p>
                        <p><a class="cta-button" href="$viteServerUrl:8080/verify-email?token=${user.uuidverificacion}" target="_blank">Verificar Registro</a></p>
                        <p>Este enlace es válido por 24 horas.</p>
                        <p>Si no has solicitado este registro, por favor ignora este correo.</p>
                        <p>¡Gracias por elegir Happ Rent!</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img class="last-image" src="https://raw.githubusercontent.com/Dankusufro/hola/main/LogoPlanoFlecha.png"
                             alt="Happ Rent Logo Plano" width="60">
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>

</html>
