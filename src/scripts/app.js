/*
 * @Author: Mr.B 
 * @Date: 2017-11-27 12:17:37 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-12-23 16:40:45
 */
'use strict'; 

// Polyfill
import './modules/pf_RAF'

// TODO: Plug-in modular
// import './plugins/jquery.scrollTo.min'

(function ($, win) {
    /**
     * Public Parameters
     */
    var _win = $(win),
        _win_height = _win.height(),
        _win_width = _win.width(),
        _ua = win.navigator.userAgent.toLowerCase(),
        _isMac = /macintosh|mac os x/.test(_ua),
        _isIphone = /iphone/.test(_ua),
        _isIpad = /ipad/.test(_ua),
        _isAndroid = /android|adr|linux/.test(_ua),
        _isMobile = /mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(_ua),
        tap_event_name = _isMobile ? 'touchend' : 'click';


    /**
     * Resize
     */
    function resizeAll(){
        _win_height = _win.height();
        _win_width = _win.width();

    }

    $(win).resize(function () {
        resizeAll();
    });

    /**
     * Footer
     */
    var icon_wechat = $('#icon_wechat'),
    cctv_qr = $('#cctv_qr');

    icon_wechat.click(function(e){
        cctv_qr.hasClass('hide') ? cctv_qr.removeClass('hide') : cctv_qr.addClass('hide');
    });

    /**
     * Your code here
     */

    /***********    Nav     ***********/
    $('#nav_btn').click((e)=>{
        $('body').toggleClass('nav-open')
    })
    $('#nav_menu').on('click', 'li', (e)=>{
        let item = $(e.target),
            class_name = item.data('target')

        _win.scrollTo('.'+class_name, {
            duration: 300,
            offset: -20
        })

        // hide nav
        $('body').removeClass('nav-open')
    })

    /***********    Skill Bar     ***********/
    var sm_controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
            triggerElement: '.photoshop'
        })
        .on("start", function (event) {
            // $(event.target.triggerElement()).addClass('active')
            TweenMax.staggerTo('.skills-box .skill', 1, {
                width: (index, target)=>{
                    // console.log(index, target)
                    var ele = $(target)

                    !ele.hasClass('active') && ele.addClass('active')
                }
            }, 0.5)
        })
        .addTo(sm_controller);
    


    /***********    Tool     ***********/
    function getBCR(ele, type) {
        if (type !== undefined) {
            return ele.getBoundingClientRect()[type];
        } else {
            return ele.getBoundingClientRect();
        }
    }

}(jQuery, window));