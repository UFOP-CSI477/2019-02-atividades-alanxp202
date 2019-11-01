<?php 

    //Configuracao DB -> Laravel .env

    // Tipo -> MySQL

    //Local -> host
    $dbhost = "127.0.0.1";
    //usuario
    $dbuser = "sistemaweb";
    //Senha
    $dbpassword = "123456";
    //Banco de Dados
    $dbname ="academico";

    //PDO
    $strConnection = "mysql:host=$dbhost; dbname=$dbname";

    $connection = new PDO($strConnection, $dbuser, $dbpassword);

    //var_dump($connection);

    //Controller - >Model

    $estados = $connection->query("SELECT * FROM estados");
    //var_dump($estados);

    //Regras de negócio


    //View -> método view('aqruivo',dados);
    //Incluir o arquivo
    //include executa msm sem o arquivo presente
    //require o arquivo é necessario
    require 'estados_view.php';



