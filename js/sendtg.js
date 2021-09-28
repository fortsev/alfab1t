$(document).ready(function(){
    $('#btn_submit').click(function(){
        // собираем данные с формы
        var user_phone = $('#FormInputPhone').val();
        console.log(user_phone.length);
        if (user_phone.length != 12) {
            $('#contact-form-message').html('Введите номер полностью');
        } else {
            // отправляем данные
            $.ajax({
                url: "../sendTG.php", // куда отправляем
                type: "post", // метод передачи
                dataType: "json", // тип передачи данных
                data: { // что отправляем
                    "user_phone":   user_phone
                },
                // после получения ответа сервера
                success: function(data){
                    $('.messages').html(data.result); // выводим ответ сервера
                }
            });
            $('#contact-form-message').html('Ваша заявка отправлена! Скоро мы Вам позвоним!');
            $('#FormInputPhone').val('');
        }
        
    });
});