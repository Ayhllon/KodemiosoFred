const fredDemo = (buttonNumber) => {
    $(".fred-button:eq(" + (buttonNumber-1) + ")").addClass("active")
}