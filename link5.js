!function(a,b,c){var d={elements:{},selectors:{gallery:".gallery",sideImage:".side-content .side-image",heroSection:".hero-section",postContent:".post-content",wpPolls:".wp-polls",heroInner:".hero-inner",subscribeBar:".inline-subscribe",noFeaturedImage:".no-featured-image"},_getElements:function(){for(var c in this.selectors)this.elements[c]=a(this.selectors[c]);this.elements.body=a("body"),this.elements.window=a(b)},_bindEvents:function(){var c=this;this.elements.window.on("resize",function(){Modernizr.mq("(min-width: 768px)")&&c.adjustSplitBlockHeight()}),a(".hero-section .hero-video")&&this.elements.window.on("resize",function(){c.resizeHeroVideo()}),c.elements.gallery.each(function(){a(this).magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="arrows-wrapper"></div><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:"title"},closeMarkup:'<button title="Close (Esc)" type="button" class="mfp-close"></button>',callbacks:{beforeOpen:function(){c.elements.body.data("fullscreen-modal","off").attr("data-fullscreen-modal","off")},open:function(){var b=a(".mfp-arrow-left"),d=a(".mfp-arrow-right");b.detach(),d.detach(),b.appendTo(".arrows-wrapper"),d.appendTo(".arrows-wrapper"),a(document).on("show-second-time-modal",function(){c.elements.body.data("fullscreen-modal","on").attr("data-fullscreen-modal","on")})}}})}),c.elements.sideImage.each(function(){a(this).magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0},tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",image:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:"title"},closeMarkup:'<button title="Close (Esc)" type="button" class="mfp-close"></button>',callbacks:{beforeOpen:function(){c.elements.body.data("fullscreen-modal","off").attr("data-fullscreen-modal","off")},open:function(){var b=a(".mfp-arrow-left"),d=a(".mfp-arrow-right");b.detach(),d.detach(),b.appendTo(".arrows-wrapper"),d.appendTo(".arrows-wrapper"),a(document).on("show-second-time-modal",function(){c.elements.body.data("fullscreen-modal","on").attr("data-fullscreen-modal","on")})}}})}),a(b).on("scroll",function(){a(b).scrollTop();a("body").hasClass("single")&&c.heroScroll()})},heroScroll:function(){if(this.elements.heroInner.length>0&&0===this.elements.noFeaturedImage.length)if(this.elements.subscribeBar.is(":visible")){if(this.elements.window.scrollTop()<=this.elements.window[0].innerHeight){var a=this.elements.window.scrollTop()/this.elements.window[0].innerHeight,b=.1*a*this.elements.window[0].innerHeight;this.elements.heroInner.css({transform:"translate(0, "+b+"%)",opacity:(100-b)/100})}}else this.elements.heroInner.css({transform:"translate(0, 0%)",opacity:1})},_bindVendors:function(){},putWPPollsLoadingIconInsidePoll:function(){this.elements.wpPolls.each(function(){var b=a(this).attr("id");if(a("#"+b+"-loading").length>0){var c=a("#"+b+"-loading");c.appendTo(a(this))}})},initHeroVideo:function(){if(a(".hero-section .hero-video")){var b=a(".hero-section .hero-video video");this.heroVideoWidth=b.width(),this.heroVideoHeight=b.height(),this.heroVideoAspect=this.heroVideoWidth/this.heroSectionHeight,isNaN(this.heroVideoAspect)&&(this.heroVideoAspect=1600/900),this.resizeHeroVideo()}},resizeHeroVideo:function(){if(a(".hero-section .hero-video")&&Modernizr.mq("(min-width: 930px)")){var b=a(".hero-section .hero-video"),c=a(".hero-section .hero-video video"),d=b.width(),e=b.height(),f=d/e;f<this.heroVideoAspect?(videoW=e*this.heroVideoAspect,videoH=e):(videoW=d,videoH=d/this.heroVideoAspect),c&&(c.css({width:videoW,height:videoH,top:"50%",left:"50%",marginLeft:0-videoW/2,marginTop:0-videoH/2}),c.width(videoW),c.height(videoH))}},adjustSplitBlockHeight:function(){a(".split-blocks").each(function(){var b=a(".block-inner").map(function(){return a(this).innerHeight()}).get(),c=Math.max.apply(null,b);a(".block").height(c)})},initialize:function(){this._getElements(),this._bindEvents(),this._bindVendors(),this.adjustSplitBlockHeight(),this.putWPPollsLoadingIconInsidePoll(),this.initHeroVideo()}};b.BettermentSinglePost=d,a(function(){d.initialize()}),a(b).load(function(){})}(jQuery,window,null);