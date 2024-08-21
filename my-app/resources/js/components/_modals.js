export function modalsInit() {
    $(document).on('click', '.close-modal', function (e) {
        closeModal();
    });
    $(document).on('click', '.open-window', function (e) {
        e.preventDefault();
        console.log(2)
        const $t = $(this);
        const href = $t.attr('href');
        const $el = $(document).find(href);
        if ($el.length === 0) return;
        openModal($el);
    });
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    });
    $(document).mouseup(function (e) {
        var div = $(".modal-window.open");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            closeModal();
        }
    });
}


export function openModal($el) {
    if ($el.length === 0) return;
    $el.addClass('open');
    $('body').addClass('open-modal');
    if ($el.find('.close-modal').length === 0) $el.append('<a class="close-modal">✕</a>');
}

export function closeModal($el = $(document).find('.modal-window.open')) {
    $el.removeClass('open');
    $('body').removeClass('open-modal');
    if ($el.hasClass('player-window')) {
        $el.html('');
    }
}