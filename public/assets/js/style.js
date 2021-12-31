$(document).ready(function() {

    $('#keyword').on('keyup', function(){
        $('#table').load('ajax/mahasiswa.php?keyword=' + $('#keyword').val())
    })
})