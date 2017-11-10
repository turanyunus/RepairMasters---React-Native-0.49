<?php 
	include 'config.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$userProvince = $obj['userProvince'];

	if ($userProvince != "") {
		$query = "SELECT district_no,name FROM rm_districts WHERE province_no = '$userProvince'";
		$result = mysqli_fetch_array(mysqli_query($db,$query));
		if(isset($result)){
			while($row[] = $result->fetch_assoc()) {
				 $tem = $row; 
				 $json = json_encode($tem);
			 }
		}else{
			$hata = 'İlceler Getirilemedi.';
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