<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $comment = $_POST['comment'];

    if (!preg_match('/^[A-Za-z0-9.,!? ]{5,200}$/', $comment)) {
        echo "Invalid comment! Please write a valid comment.";
    } else {
        echo "Comment submitted: $comment";
    }
}
?>
