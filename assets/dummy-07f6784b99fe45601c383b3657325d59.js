"use strict";define("dummy/adapters/application",["exports","ember-data-twitch/adapters/twitch"],function(e,t){e.default=t.default.extend({})}),define("dummy/adapters/twitch",["exports","ember-data-twitch/adapters/twitch"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r,a){t.default.MODEL_FACTORY_INJECTIONS=!0;var l=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default});(0,r.default)(l,a.default.modulePrefix),e.default=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var r=n.default.APP.name,a=n.default.APP.version;e.default=t.default.extend({version:a,name:r})}),define("dummy/components/menu-link-item",["exports","ember","dummy/templates/components/menu-link-item"],function(e,t,n){var r=t.default.Component;e.default=r.extend({layout:n.default,tagName:"li",classNames:["c-menu-link-item","u-relative"],classNameBindings:["isActive"],routeName:null,title:null})}),define("dummy/components/x-sidenav",["exports","ember","ember-service/inject","dummy/templates/components/x-sidenav"],function(e,t,n,r){var a=t.default.computed.readOnly,l=t.default.Component;e.default=l.extend({layout:r.default,tagName:"section",classNames:["c-sidenav"],SidenavService:(0,n.default)("sidenav"),activeTopLevelRoute:a("SidenavService.activeTopLevelRoute"),menuLinks:a("SidenavService.menuLinks")})}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.andHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.andHelper)),e.default=r}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.equalHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.equalHelper)),e.default=r}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gtHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gtHelper)),e.default=r}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.gteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.gteHelper)),e.default=r}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.isArrayHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.isArrayHelper)),e.default=r}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.ltHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.ltHelper)),e.default=r}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.lteHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.lteHelper)),e.default=r}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notEqualHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notEqualHelper)),e.default=r}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.notHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.notHelper)),e.default=r}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.orHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.orHelper)),e.default=r}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/route-action",["exports","ember-route-action-helper/helpers/route-action"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,n){var r=null;t.default.Helper?r=t.default.Helper.helper(n.xorHelper):t.default.HTMLBars.makeBoundHelper&&(r=t.default.HTMLBars.makeBoundHelper(n.xorHelper)),e.default=r}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data-twitch",["exports","ember-data-twitch/initializers/ember-data-twitch"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var r,a=n.default.exportApplicationGlobal;r="string"==typeof a?a:t.default.String.classify(n.default.modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,n,r,a,l,d,i,u,o,m,s,c){function p(){t.default.Helper||((0,n.registerHelper)("and",r.andHelper),(0,n.registerHelper)("or",a.orHelper),(0,n.registerHelper)("eq",l.equalHelper),(0,n.registerHelper)("not",d.notHelper),(0,n.registerHelper)("is-array",i.isArrayHelper),(0,n.registerHelper)("not-eq",u.notEqualHelper),(0,n.registerHelper)("gt",o.gtHelper),(0,n.registerHelper)("gte",m.gteHelper),(0,n.registerHelper)("lt",s.ltHelper),(0,n.registerHelper)("lte",c.lteHelper))}e.initialize=p,e.default={name:"truth-helpers",initialize:p}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/models/twitch-block",["exports","ember-data-twitch/models/twitch-block"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-channel-feed",["exports","ember-data-twitch/models/twitch-channel-feed"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-channel",["exports","ember-data-twitch/models/twitch-channel"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-chat",["exports","ember-data-twitch/models/twitch-chat"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-follow",["exports","ember-data-twitch/models/twitch-follow"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-game",["exports","ember-data-twitch/models/twitch-game"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-ingest",["exports","ember-data-twitch/models/twitch-ingest"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-search",["exports","ember-data-twitch/models/twitch-search"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-stream",["exports","ember-data-twitch/models/twitch-stream"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-subscription",["exports","ember-data-twitch/models/twitch-subscription"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-team",["exports","ember-data-twitch/models/twitch-team"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-user",["exports","ember-data-twitch/models/twitch-user"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/models/twitch-video",["exports","ember-data-twitch/models/twitch-video"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});r.map(function(){this.route("index",{path:"/"}),this.route("videos"),this.route("twitch-auth"),this.route("users"),this.route("teams"),this.route("subscriptions"),this.route("streams"),this.route("ingests"),this.route("searches"),this.route("games"),this.route("follows"),this.route("chats"),this.route("channels"),this.route("blocks")}),e.default=r}),define("dummy/routes/application",["exports","ember","ember-service/inject"],function(e,t,n){var r=t.default.Route;e.default=r.extend({SidenavService:(0,n.default)("sidenav"),actions:{authenticate:function(){console.log("TODO: Implement authentication")},willTransition:function(e){var t=e.targetName.split(".")[0];this.get("SidenavService").set("activeTopLevelRoute",t)}}})}),define("dummy/routes/blocks",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/channels",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/chats",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/follows",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/games",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/index",["exports","ember"],function(e,t){var n=t.default.Route;e.default=n.extend({})}),define("dummy/routes/ingests",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/searches",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/streams",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/subscriptions",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/teams",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/twitch-auth",["exports","ember","ember-data-twitch/mixins/twitch-redirect-handler"],function(e,t,n){var r=t.default.Route;e.default=r.extend(n.default,{})}),define("dummy/routes/users",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/routes/videos",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return{}}})}),define("dummy/serializers/twitch",["exports","ember-data-twitch/serializers/twitch"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/sidenav",["exports","ember"],function(e,t){var n=t.default.Service;t.default.Obejct,t.default.computed.equal;e.default=n.extend({activeTopLevelRoute:null,menuLinks:[{routeName:"videos",title:"Videos"},{routeName:"blocks",title:"Blocks"},{routeName:"channels",title:"Channels"},{routeName:"chats",title:"Chats"},{routeName:"follows",title:"Follows"},{routeName:"games",title:"Games"},{routeName:"ingests",title:"Ingests"},{routeName:"searches",title:"Searches"},{routeName:"streams",title:"Streams"},{routeName:"subscriptions",title:"Subscriptions"},{routeName:"teams",title:"Teams"},{routeName:"users",title:"Users"}]})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:20,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("main");e.setAttribute(n,"class","application");var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n\n");e.appendChild(n,r);var r=e.createTextNode("  ");e.appendChild(n,r);var r=e.createElement("section");e.setAttribute(r,"class","application__navbar c-navbar");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","c-navbar__content-section u-fill-height o-content-box");var l=e.createTextNode("\n      ");e.appendChild(a,l);var l=e.createElement("button");e.setAttribute(l,"class","c-button c-button--primary c-navbar__login-button");var d=e.createTextNode("Authenticate with Twitch");e.appendChild(l,d),e.appendChild(a,l);var l=e.createTextNode("\n    ");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n  ");e.appendChild(n,r);var r=e.createElement("section");e.setAttribute(r,"class","application__main-content u-fill-height");var a=e.createTextNode("\n\n\n");e.appendChild(r,a);var a=e.createTextNode("    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=e.childAt(r,[4,1,1]),l=new Array(3);return l[0]=e.createMorphAt(r,1,1),l[1]=e.createAttrMorph(a,"onclick"),l[2]=e.createMorphAt(e.childAt(r,[6]),2,2),l},statements:[["inline","x-sidenav",[],["class","application__sidenav u-fill-height"],["loc",[null,[3,2],[3,58]]],0,0],["attribute","onclick",["subexpr","route-action",["authenticate"],[],["loc",[null,[null,null],[8,111]]],0,0],0,0,0,0],["content","outlet",["loc",[null,[16,4],[16,14]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/blocks",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/blocks.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Blocks");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/channels",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/channels.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Channels");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/chats",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/chats.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Chats");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/components/menu-link-item",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:1,column:95}},moduleName:"dummy/templates/components/menu-link-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["content","title",["loc",[null,[1,86],[1,95]]],0,0,0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/menu-link-item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["block","link-to",[["get","routeName",["loc",[null,[1,11],[1,20]]],0,0,0,0]],["class","c-menu-link-item__link o-menu-link u-fill o-content-box"],0,null,["loc",[null,[1,0],[1,107]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/components/x-sidenav",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:3,column:4},end:{line:3,column:65}},moduleName:"dummy/templates/components/x-sidenav.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Ember Data Twitch");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:10,column:6},end:{line:12,column:6}},moduleName:"dummy/templates/components/x-sidenav.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","menu-link-item",[],["class","c-sidenav__menu-link-item","routeName",["subexpr","@mut",[["get","menuLink.routeName",["loc",[null,[11,69],[11,87]]],0,0,0,0]],[],[],0,0],"title",["subexpr","@mut",[["get","menuLink.title",["loc",[null,[11,94],[11,108]]],0,0,0,0]],[],[],0,0],"isActive",["subexpr","eq",[["get","menuLink.routeName",["loc",[null,[11,122],[11,140]]],0,0,0,0],["get","activeTopLevelRoute",["loc",[null,[11,141],[11,160]]],0,0,0,0]],[],["loc",[null,[11,118],[11,161]]],0,0]],["loc",[null,[11,8],[11,163]]],0,0]],locals:["menuLink"],templates:[]}}();return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"dummy/templates/components/x-sidenav.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("section");e.setAttribute(n,"class","c-sidenav__header-section u-relative");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("header");e.setAttribute(r,"class","c-sidenav__header o-content-box u-fill");var a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("section");e.setAttribute(n,"class","c-sidenav__body-section");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("nav"),a=e.createTextNode("\n    ");e.appendChild(r,a);var a=e.createElement("ul");e.setAttribute(a,"class","c-sidenav__menu u-fill u-relative");var l=e.createTextNode("\n");e.appendChild(a,l);var l=e.createComment("");e.appendChild(a,l);var l=e.createTextNode("    ");e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n  ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0,1]),1,1),r[1]=e.createMorphAt(e.childAt(t,[2,1,1]),1,1),r},statements:[["block","link-to",["index"],["class","c-sidenav__logo"],0,null,["loc",[null,[3,4],[3,77]]]],["block","each",[["get","menuLinks",["loc",[null,[10,14],[10,23]]],0,0,0,0]],[],1,null,["loc",[null,[10,6],[12,15]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/follows",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/follows.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Follows");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/games",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/games.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Games");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:9,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"class","homepage__heading u-align-center");var r=e.createTextNode("Select a Resource to get started");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[2,0],[2,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/ingests",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/ingests.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Ingests");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/searches",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/searches.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Searches");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/streams",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/streams.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Streams");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/subscriptions",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/subscriptions.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Subscriptions");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/teams",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/teams.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Teams");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/users",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/users.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Users");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/videos",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:4,column:2},end:{line:6,column:2}},moduleName:"dummy/templates/videos.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("li"),r=e.createTextNode("video.title");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:["videos"],templates:[]}}();return{meta:{revision:"Ember@2.7.0-beta.3",loc:{source:null,start:{line:1,
column:0},end:{line:10,column:0}},moduleName:"dummy/templates/videos.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2"),r=e.createTextNode("Videos");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("ul"),r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[2]),1,1),r[1]=e.createMorphAt(t,4,4,n),r},statements:[["block","each",[["get","model",["loc",[null,[4,10],[4,15]]],0,0,0,0]],[],0,null,["loc",[null,[4,2],[6,11]]]],["content","outlet",["loc",[null,[9,0],[9,10]]],0,0,0,0]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e.default.$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{default:a}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-data-twitch",version:"0.0.0+aa3d4e03"});