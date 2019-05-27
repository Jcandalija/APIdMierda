$(document).ready(function() {

    $('.buscar').on('click', function(){

        $('.tiempo').text("");
        ciudad = $('.ciudad').val();

        url = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=f57b727fb3b5e62821261cbca22b1ca7&units=metric";

        $.getJSON(url,function(json){
    
            $('.tiempo').append("Ciudad : " + json.name + "<br>");
            $('.tiempo').append("Temperatura : " + json.main.temp+ "<br>");
            $('.tiempo').append("Humedad : " + json.main.humidity+ "%<br>");
            $('.tiempo').append("Temperatura máxima : " + json.main.temp_max+ "<br>");
            $('.tiempo').append("Temperatura mínima : " + json.main.temp_min+ "<br>");

        });

            var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                $.getJSON(flickerAPI, {
                    tags: $(".ciudad").val(),
                    tagmode: "any",
                    format: "json"
                }).done(function(result, status, xhr) {
                    $('.imagenes').text('');
                    $.each(result.items, function(i, item) {
                        $("<img>").attr("src", item.media.m).appendTo(".imagenes");
                        if (i === 999) {
                            return false;
                        }
                    });
                }).fail(function(xhr, status, error) {
                    alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
                });

        });

    });