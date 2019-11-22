<!DOCTYPE html>
<html lang="br" dir="ltr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <title>Página Principal do sistema</title>


</head>
<body>
    <!--Links - menu lateral-->
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563D7C;">

        <span class="navbar-brand mb-0 h1">Acadêmico</span>
  
        <ul class="navbar-nav">
            <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="/welcome" class="nav-link">Sobre</a></li>
            <li class="nav-item"><a href="/listar" class="nav-link">Listar pessoas</a></li>
            <li class="nav-item"><a href="/estados" class="nav-link">Listar estados</a></li>
        </ul>
      </nav>

    <!--Conteúdo - parte central-->

    @yield('conteudo')

</body>
</html>