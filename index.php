<?php
include_once ('viacep.php');
?>

<!DOCTYPE html>

<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name ="viewport" content="width=device-width, initial-scale=1.0">
<title>CONSUMINDO API</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<form action="." method="post">
<p>DIGITE O CEP PARA ENCONTRAR O ENDEREÇO.</p>
<input type="text" placeholder="digite um cep..." name="cep" value="<?php echo $address ->cep?>"> <br>
<input type="submit"> <br>
<input type="text" placeholder="rua" name="rua" value=" <?php echo $address ->logradouro ?>"><br>
<input type="text" placeholder="bairro" name="bairro" value=" <?php echo $address ->bairro ?>"><br>
<input type="text" placeholder="cidade" name="cidade" value=" <?php echo $address ->localidade ?>"><br>
<input type="text" placeholder="estado." name="estado" value=" <?php echo $address ->uf ?>"><br>
</form>
</body>
</html>