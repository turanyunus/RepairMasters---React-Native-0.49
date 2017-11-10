<?php 
	include 'config.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$userName = $obj['userName'];
	$password = $obj['userPassword'];
	if ($userName != "" || $password != "") {

		$query = "SELECT * FROM rm_users WHERE user_name = '$userName' and user_pass = '$password'";
		$result = mysqli_fetch_array(mysqli_query($db,$query));
		if(isset($result)){
			$hata = 'Giriş Başarılı';
			$hata = json_encode($hata);
			echo $hata;
		}else{
			$hata = 'Hatali kullanici adi/sifre.';
			$hata = json_encode($hata);
			echo $hata;	
		}
	}else{
		$hata = 'Girilecek Alanlari Bos Birakiniz';
		$hata = json_encode($hata);
		echo $hata;
	}
	mysqli_close($db);	
?>