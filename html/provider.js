function scheduleHtmlProvider() {
    var url = window.location.pathname;
    console.log(url);
    function location() {
        self.location = 'http://jwxt.niit.edu.cn/jwapp/sys/wdkb/*default/index.do'
    }
    // location()
    
    return document.querySelector('.wut_table').innerHTML
}