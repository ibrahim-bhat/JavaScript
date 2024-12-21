<!DOCTYPE html>
<html>

<head>
    <title>One-Time View Video</title>
</head>

<body>
    <video controls>
        <source src="<?php echo $presignedUrl; ?>" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</body>

</html>