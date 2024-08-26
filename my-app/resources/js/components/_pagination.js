import {showPreloader, hidePreloader} from "./_helpers";

let $doc = $(document);
let load = false;
let loading = false;
let parser = new DOMParser();
let $body = $('body');

export function pagination() {
    $(document).on('click', '.pagination-js a', function (e) {
        e.preventDefault();
        let $button = $(this);
        let href = $button.attr('href');
        const append = $button.hasClass('more-link-js');
        const addEntry = !$button.hasClass('more-link-js');
        renderContainer(href, {addEntry, append});
    });
}

export function renderContainer(url, args = {}) {
    const addEntry = args.addEntry || false;
    const append = args.append || false;
    let $container = $doc.find('.container-js');
    let $pagination = $doc.find('.pagination-js');
    if (url === undefined) return;
    if (loading) return;
    loading = true;
    $pagination.addClass('not-active');
    showPreloader();
    if (addEntry === true) window.history.pushState({}, '', url);
    let param = {
        type: 'GET',
        url: url
    };
    $.ajax(param).done(function (r) {
        hidePreloader();
        loading = false;
        if (r) {
            let $requestBody = $(parser.parseFromString(r, "text/html"));
            if (append) {
                $container.append($requestBody.find('.container-js').html());
            } else {
                $container.html($requestBody.find('.container-js').html());
            }
            if($requestBody.find('.pagination-js').length > 0){
                $pagination.html($requestBody.find('.pagination-js').html());
                $pagination.removeClass('not-active');
            }else {
                if(append){
                    $pagination.remove();
                }else {
                    $pagination.html('');
                }
            }

        } else {
            $pagination.html('');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        renderContainer(url);
    });
}