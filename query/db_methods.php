<?php

$connection = new mysqli("localhost", "root", "", 'flowershop');


if ($_GET['title']) {

    $query = "select * from bouquets where id = " . $_GET['title'];
    $result = $connection->query($query);

    while($row = mysqli_fetch_array($result))
    {
        echo $row['title']."<br>\n";
    }
}

if ($_GET['insert']) {echo 1;

    $query = 'INSERT into `bouquets` (`title`, `full_price`, `price`, `category`, `rating`, `img`) values("test", "33333", "222222", "qwerry", "5", "2")';
    $result = $connection->query($query);
    echo $result;
}

if ($_GET['get_catalog']) {

    $query = "select * from bouquets";
    $result = $connection->query($query);

    while($row = mysqli_fetch_array($result))
    {
        echo $row['title'] . " - Цена - " . $row['price'] . "<br>\n";
    }
}


?>