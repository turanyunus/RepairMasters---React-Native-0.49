<?php
	include 'config.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$userName = $obj['userName'];
	$password = $obj['userPassword'];
	$email = $obj['userEmail'];

	if ($userName != "" || $password != "" || $email != "") {
		$query = "SELECT * FROM rm_users WHERE user_name = '$userName'";
		$result = mysqli_fetch_array(mysqli_query($db,$query));
		if (isset($result)) {
			$hata = 'Farklı bir kullanıcı adı belirleyiniz.';
			$hata = json_encode($hata);
			echo $hata;
		}else{
			$query = "INSERT INTO rm_users(user_name,user_pass,user_displayname,user_email) 
					  VALUES('$userName','$password','$userName','$email')";
			if (mysqli_query($db,$query)){
			    $hata = 'Kayıt Başarılı';
				$hata = json_encode($hata);
				echo $hata;
			}else{
				$hata = 'Kayıt Başarısız, Tekrar Deneyiniz';
				$hata = json_encode($hata);
				echo $hata;
			}
		}
	}else{
		$hata = 'Girilecek Alanlari Bos Birakiniz';
		$hata = json_encode($hata);
		echo $hata;
	}
	
	mysqli_close($db);	
?>