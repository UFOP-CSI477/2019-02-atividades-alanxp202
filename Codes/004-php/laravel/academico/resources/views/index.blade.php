<!DOCTYPE html>
<html lang="br" dir="ltr">
<head>
    <meta charset="UTF-8">

    <title>Página Principal do sistema</title>

</head>
<body>
    <!--Links - menu lateral-->
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/welcome">Sobre</a></li>
        <li><a href="/listar">Listar pessoas</a></li>
    </ul>

    <!--Conteúdo - parte central-->

    @yield('conteudo')

</body>
</html>