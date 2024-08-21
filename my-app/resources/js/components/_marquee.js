export function startMarquee() {
    $(document).find('.marquee-content').each(function (){
        const $wrapper = $(this);
        const $items = $wrapper.find(' > *');
        const html = $wrapper.html();
        console.log($items.length)
        if($items.length < 20){
            for (let a = 1; a <= 3; a++) $wrapper.append(html);
        }

    });
}