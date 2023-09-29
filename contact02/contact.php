<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $position_held = $_POST['position_held'];
    $org = $_POST['org'];
    $adr_org = $_POST['adr_org'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $www = $_POST['www'];
    $home_phone = $_POST['home_phone'];
    $u_email = $_POST['u_email'];
    $youradr = $_POST['youradr'];
    $prof = $_POST['prof'];
    $find_out = $_POST['find_out'];
    $class_up = $_POST['class_up'];
    $rub_up = $_POST['rub_up'];
    $podp = $_POST['podp'];
    $sem = $_POST['sem'];
    $place_on = $_POST['place_on'];
    $raspr = $_POST['raspr'];
    $fmd = $_POST['fmd'];
    $message = $_POST['message'];
    

    $to = "deniss20019@mail.ru"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Письмо с сайта";


    $msg="
    Имя: $name /n
    Фамилия: $surname /n
    Занимаемая должность: $position_held /n
    Наименование организации / частное лицо: $org /n

    Контактная информация

    Адрес организации (с индексом): $adr_org /n
    Телефон/факс (с кодом города): $phone /n
    Электронная почта: $email /n
    Адрес в Интернете: $www /n

    Координаты для непосредственной связи с Вами 
    
    Телефон/факс (с кодом города): $home_phone/n
    Ваша электронная почта: $u_email /n
    Почтовый адрес (домашний, с индексом): $youradr /n
    Какие профессиональные вопросы Вас интересуют: $prof /n
    Как Вы узнали о Натаннж-Интерофис: $find_out /n
    Повышаете ли Вы свою квалификацию?: $class_up/n
    Хотели бы ее повысить, в том числе за рубежом?(Где?): $rub_up/n
    Хотели бы Вы подписаться на журнал FMD?: $podp /n
    Хотели бы Вы принять участие в работе семинара?: $sem /n
    Хотели бы Вы разместить в FMD: $place_on /n
    Хотели бы Вы заниматься распространением FMD?: $raspr /n
    Хотели бы Вы стать региональным представителем FMD: $fmd /n
    Ваши пожелания и комментарии по нашей работе.: $message /n"; 	
	mail($to, $subject, $msg, "From: $from ");
?>