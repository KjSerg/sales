export default function article(){
    const $sidebar = $(document).find('.article-sidebar__list');
    let html = '';
    if($sidebar.length === 0) return;
    const $text = $(document).find('.text');
    const $titles = $text.find('h6, h5, h4, h3, h2, h1');
    $titles.each(function (index){
        const $this = $(this);
        let ID = $this.attr('id');
        const text = $this.text().trim();
        if(ID === undefined){
            ID = 'title-'+index;
            $this.attr('id', ID);
        }
        html += ' <li><a href="#'+ID+'">'+text+'</a></li>';
    });
    $sidebar.find('ol').html(html);
}