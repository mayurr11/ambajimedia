// Assuming you are using Lightcase's open event
$(document).ready(function () {
    // Trigger when lightcase is opened
    $(document).on('lightcase:open', function() {
        // Add video source dynamically
        $('#lightcase-video').attr('src', 'your-video-file.mp4');
    });

    // Trigger when lightcase is closed
    $(document).on('lightcase:close', function() {
        // Remove video source to prevent auto-loading next time
        $('#lightcase-video').removeAttr('src');
    });
});
