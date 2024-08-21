export function tabs() {
    $(document).on('click', '.tabs-head__item', function (e) {
        e.preventDefault();
        const $t = $(this);
        const $wrapper = $t.closest('.tabs');
        const isActive = $t.hasClass('active');
        const href = $t.attr('href');
        if (isActive) return;
        $wrapper.find('.tabs-head__item').removeClass('active');
        $wrapper.find('.tabs-content').removeClass('active');
        $t.addClass('active');
        $wrapper.find('.tabs-content' + href).addClass('active');
    });
}