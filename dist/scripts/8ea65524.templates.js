Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push("\n                            <li>"),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                        "),f}function g(a,b){var d,e,f="";return b.buffer.push('\n                                <li class="list-group-item">'),d={},e={},b.buffer.push(n(c._triageMustache.call(a,"item",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</li>\n                            "),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var h,i,j,k,l,m="",n=this.escapeExpression,o=c.helperMissing,p=this;return e.buffer.push('<div>\n    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">\n        <div class="navbar-header habmin-nav">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <span class="navbar-brand">'),j={},k={},l={hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.t||b.t,h?h.call(b,"mainMenuAppName",l):o.call(b,"t","mainMenuAppName",l)))),e.buffer.push('</span>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n\n            <ul class="nav navbar-nav">\n                <li class="active"><a href="#"><span class="glyphicon glyphicon-tasks"></span> '),j={},k={},l={hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.t||b.t,h?h.call(b,"mainMenuDashboard",l):o.call(b,"t","mainMenuDashboard",l)))),e.buffer.push('</a></li>\n                <li><a href="#">'),j={},k={},l={hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e},e.buffer.push(n((h=c.t||b.t,h?h.call(b,"mainMenuAutomation",l):o.call(b,"t","mainMenuAutomation",l)))),e.buffer.push('</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu" role="menu">\n                        <li><a href="#">Action</a></li>\n                        <li><a href="#">Another action</a></li>\n                        <li><a href="#">Something else here</a></li>\n                        <li class="divider"></li>\n                        <li><a href="#">Separated link</a></li>\n                        <li class="divider"></li>\n                        <li><a href="#">One more separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n            <form class="navbar-form navbar-left" role="search">\n                <div class="form-group">\n                    <input type="text" class="form-control" placeholder="Search">\n                </div>\n                <button type="submit" class="btn btn-default">Submit</button>\n            </form>\n            <ul class="nav navbar-nav navbar-right">\n                <li><a href="#">Link</a></li>\n                <li class="dropdown">\n                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>\n                    <ul class="dropdown-menu" role="menu">\n                        '),j={},k={},i=c.each.call(b,"App.sitemapListModel",{hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push("\n                        "),k={contentBinding:b,optionLabelPath:b},j={contentBinding:"STRING",optionLabelPath:"STRING"},e.buffer.push(n(c.view.call(b,{hash:{contentBinding:"model.sitemapListStore",optionLabelPath:"content.name"},contexts:[],types:[],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push('\n                    </ul>\n                </li>\n            </ul>\n\n\n        </div>\n    </nav>\n    <div class="container" id="main">\n        <div class="row">\n            <div>\n                <div class="col-md-3">\n                    <div class="well sidebar-nav">\n                        <strong>Colors</strong>\n                        <ul class="list-group">\n                            '),j={},k={},i=c.each.call(b,"item","in","controller",{hash:{},inverse:p.noop,fn:p.program(3,g,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:k,hashTypes:j,data:e}),(i||0===i)&&e.buffer.push(i),e.buffer.push('\n                        </ul>\n                    </div>\n                </div>\n                <div class="col-md-9">\n                    '),j={},k={},e.buffer.push(n(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:k,hashTypes:j,data:e}))),e.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"),m}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<div class="well">\n    Welcome to Yeoman and Ember.js! BLAH!\n</div>\n')});