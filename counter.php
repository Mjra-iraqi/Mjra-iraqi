<?php
$fileName = "counter.txt";

$counter = (int) file_get_contents($fileName);

$counter++;

file_put_contents($fileName, $counter);

echo $counter;
?>
