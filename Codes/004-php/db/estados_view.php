<!DOCTYPE html>
<html lang="br" dir = "ltr">
<head>
    <meta charset="UTF-8">
    <title>Lista de estados</title>

</head>
<body>

    <ol>
        <?php
    
        while($e = $estados->fetch()){
            echo "<li>";
            echo $e["nome"];
            echo "</li>";
        }

        ?>
    </ol>
</body>
</html>