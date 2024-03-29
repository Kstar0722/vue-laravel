(function () {
    this.UrlHelper = function (url) {
        this.url = url;

        this.checkUrl = function () {
            var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
            return regexp.test(this.url);
        };

        this.getHostName = function () {
            var match = this.url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            return (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) ? match[2] : null;
        };

        this.checkHostUrl = function () {
            var urlHost = this.getHostName();
            //link should be url and from this site
            return this.checkUrl() && urlHost && urlHost == window.location.hostname;
        }

    }
}());

;eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}(';5 V=(8(){"1D 1B";5 j={o:\'o\',E:\'1y\',m:\'m\',p:\'1x\',q:\'1v\',t:\'t\'},19={"1u":1t,"1q":1n,"1m":11,"1k":18,"1j":11,"1i":18},S=8(a,b){5 d=1h,O=d.1f(\'a\'),b=b||d.17.J,L=b.r(/\\/\\/(.*?)(?::(.*?))?@/)||[];O.J=b;w(5 i N j){a[i]=O[j[i]]||\'\'}a.o=a.o.l(/:$/,\'\');a.q=a.q.l(/^\\?/,\'\');a.t=a.t.l(/^#/,\'\');a.x=L[1]||\'\';a.y=L[2]||\'\';a.m=(19[a.o]==a.m||a.m==0)?\'\':a.m;9(!a.o&&!/^([a-z]+:)?\\/\\//.1d(b)){5 c=T V(d.17.J.r(/(.*\\/)/)[0]),A=c.p.X(\'/\'),B=a.p.X(\'/\');A.W();w(5 i=0,C=[\'o\',\'x\',\'y\',\'E\',\'m\'],s=C.Z;i<s;i++){a[C[i]]=c[C[i]]}10(B[0]==\'..\'){A.W();B.1c()}a.p=(b.1p(0,1)!=\'/\'?A.13(\'/\'):\'\')+\'/\'+B.13(\'/\')}G{a.p=a.p.l(/^\\/?/,\'/\')}14(a)},15=8(s){s=s.l(/\\+/g,\' \');s=s.l(/%([1b][0-v-F])%([P][0-v-F])%([P][0-v-F])/g,8(a,b,c,d){5 e=u(b,16)-1e,H=u(c,16)-K;9(e==0&&H<1g){k a}5 f=u(d,16)-K,n=(e<<12)+(H<<6)+f;9(n>1l){k a}k I.R(n)});s=s.l(/%([1o][0-v-F])%([P][0-v-F])/g,8(a,b,c){5 d=u(b,16)-1a;9(d<2){k a}5 e=u(c,16)-K;k I.R((d<<6)+e)});s=s.l(/%([0-7][0-v-F])/g,8(a,b){k I.R(u(b,16))});k s},14=8(g){5 h=g.q;g.q=T(8(c){5 d=/([^=&]+)(=([^&]*))?/g,r;10((r=d.1r(c))){5 f=1s(r[1].l(/\\+/g,\' \')),M=r[3]?15(r[3]):\'\';9(4[f]!=1w){9(!(4[f]D Y)){4[f]=[4[f]]}4[f].1z(M)}G{4[f]=M}}4.1A=8(){w(f N 4){9(!(4[f]D U)){1C 4[f]}}};4.Q=8(){5 s=\'\',e=1E;w(5 i N 4){9(4[i]D U){1F}9(4[i]D Y){5 a=4[i].Z;9(a){w(5 b=0;b<a;b++){s+=s?\'&\':\'\';s+=e(i)+\'=\'+e(4[i][b])}}G{s+=(s?\'&\':\'\')+e(i)+\'=\'}}G{s+=s?\'&\':\'\';s+=e(i)+\'=\'+e(4[i])}}k s}})(h)};k 8(a){4.Q=8(){k((4.o&&(4.o+\'://\'))+(4.x&&(4.x+(4.y&&(\':\'+4.y))+\'@\'))+(4.E&&4.E)+(4.m&&(\':\'+4.m))+(4.p&&4.p)+(4.q.Q()&&(\'?\'+4.q))+(4.t&&(\'#\'+4.t)))};S(4,a)}}());', 62, 104, '||||this|var|||function|if|||||||||||return|replace|port||protocol|path|query|match||hash|parseInt|9A|for|user|pass||basePath|selfPath|props|instanceof|host||else|n2|String|href|0x80|auth|value|in|link|89AB|toString|fromCharCode|parse|new|Function|Url|pop|split|Array|length|while|80||join|parseQs|decode||location|443|defaultPorts|0xC0|EF|shift|test|0xE0|createElement|32|document|wss|ws|https|0xFFFF|http|70|CD|substring|gopher|exec|decodeURIComponent|21|ftp|search|null|pathname|hostname|push|clear|strict|delete|use|encodeURIComponent|continue'.split('|'), 0, {}));

Url.prototype.valid = function (url) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url ? url : this.toString());
}

Url.prototype.baseUrl = function () {
    return this.protocol + '://' + this.host + (this.port ? ':' + this.port : '');
}

window.Url = function (url) {
    return new Url(url);
}

window.url = function (url, copyQuery) {
    var url = new Url(url);
    if (copyQuery) {
        var current = new Url();
        url.query = current.query;
    }
    return url.toString();
}
window.objectToQuery = function (value) {
    var url = new Url();
    for (var key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            url.query[key] = value[key];
        }
    }
    return url.query.toString();
}