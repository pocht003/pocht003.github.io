<?php
if(isset($_REQUEST['j']) and !empty($_REQUEST['j'])){
	header("Location: http://atmst.net/utr64.php?j=".urlencode($_REQUEST['j']));
}
else{
	@$open = $_GET['open'];
	if (isset($open) && $open !=''){header("Location: http://atmst.net/$open ");exit;}
	foreach ($_GET as $key => $value) {
		if ($key == "url") {
			$url = $value;
		} else {
			if ($key != "e")
			$url .= "&".$key."=".$value;
		}
	}
	@$e = $_GET['e'];
	if (isset($url) && $url !=''){
		$array = explode("*", $url);
		$url=urlencode($url);
		if (@$array[3] == 2){header("Location: http://atmst.net/utr.php?url=$url&e=$e");}
		if (@$array[3] == 3){header ("Location: $url");}
		header("Location: http://atmst.net/utr.php?url=$url&e=$e");
	}
}
?>
