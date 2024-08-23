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
        renderContainer(href, {addEntry: true});
    });
}

export function renderContainer(url, args = {}) {
    const addEntry = args.addEntry || false;
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
            $container.html($requestBody.find('.container-js').html());
            $pagination.html($requestBody.find('.pagination-js').html());
            $pagination.removeClass('not-active');
        } else {
            $pagination.html('');
        }
    }).fail(function (jqXHR, textStatus, errorThrown) {
        renderContainer(url);
    });
}