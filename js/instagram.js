(function ($) {
    var $instagram = $('#instagram'),
        $body = $('body');

    function onLoad (data) {
        var posts = data.contents.items,
            i = 0;

        for (; i < posts.length; i++) {
            debugger;
            var $img = $('<img />', {
                'class': 'instagram-post',
                'src': posts[i].images.standard_resolution.url
            });

            $instagram.append($img);
        }
    }

    $.ajax({
        url: 'http://www.whateverorigin.org/get?url=https://www.instagram.com/begrhymed_records/media/',
        dataType: 'jsonp',
        jsonp: 'callback',
        jsonpCallback: 'onLoad'
    })
    .done(onLoad);
})(jQuery);