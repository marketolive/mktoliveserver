var mktoLiveDevSubId = 20,
mktoLiveProdSubId = 69,
mktoLiveSubId = mktoLiveDevSubId,
mktoLiveLandingPageHost = "na-sjdemo1.marketo.com",
mktoLive106MunchkinId = "026-COU-482",
mktoLiveDevMunchkinId = "685-BTN-772",
mktoLiveProdMunchkinId = "185-NGX-811",
mktoLiveMunchkinId = mktoLiveDevMunchkinId,
mktoReferrer = "http%3A%2F%2Fwww.marketolive.com",
reqStaticParams = "&subId=" + mktoLiveSubId + "&munchkinId=" + mktoLiveMunchkinId + "&_mktoReferrer=" + mktoReferrer,
mockLeadEndpoint = "https://www.mockaroo.com/0799ab60/download?count=1&key=7d30cdf0",
webPages = [
    "/info/why-us",
    "/info/integrations",
    "/info/contact-us",
    "/info/live-event",
    "/info/webinar",
    "/info/products",
    "/info/pricing",
    "/info/analyst-reports",
    "/info/community",
    "/info/whitepapers"
],
acquirePages = [{
        "formid": 1001,
        "formVid": 1001,
        "lpId": 1003,
        "pathname": "/contact-us.html"
    }, {
        "formid": 1135,
        "formVid": 1135,
        "lpId": 1339,
        "pathname": "/turner-contact-us.html"
    }, {
        "formid": 1067,
        "formVid": 1067,
        "lpId": 1173,
        "pathname": "/monthly-digest-signup.html"
    }, {
        "formid": 1134,
        "formVid": 1134,
        "lpId": 1337,
        "pathname": "/turner-monthly-digest-signup.html"
    }, {
        "formid": 1068,
        "formVid": 1068,
        "lpId": 1176,
        "pathname": "/blog-signup.html"
    }, {
        "formid": 1125,
        "formVid": 1125,
        "lpId": 1288,
        "pathname": "/cloud-storage-blog-signup.html"
    }, {
        "formid": 1116,
        "formVid": 1116,
        "lpId": 1266,
        "pathname": "/whitepaper-download.html"
    }, {
        "formid": 1126,
        "formVid": 1126,
        "lpId": 1290,
        "pathname": "/cloud-backup-whitepaper-download.html"
    }, {
        "formid": 1150,
        "formVid": 1150,
        "lpId": 1362,
        "pathname": "/demand-side-platform-acquire.html"
    }, {
        "formid": 1145,
        "formVid": 1145,
        "lpId": 1356,
        "pathname": "/facebook-lead-ads-acquire.html"
    }, {
        "formid": 1148,
        "formVid": 1148,
        "lpId": 1359,
        "pathname": "/facebook-news-feed-ads-acquire.html"
    }, {
        "formid": 1140,
        "formVid": 1140,
        "lpId": 1349,
        "pathname": "/google-adwords-acquire.html"
    }, {
        "formid": 1138,
        "formVid": 1138,
        "lpId": 1346,
        "pathname": "/google-display-ads-acquire.html"
    }, {
        "formid": 1143,
        "formVid": 1143,
        "lpId": 1353,
        "pathname": "/linkedin-lead-ads-acquire.html"
    }
],
abmUrls = [
    "/are-you-abm-ready.html",
    "/top5-abm-themes.html",
    "/marketers-can-benefit-from-abm.html",
    "/sirius-abm-2016-state.html",
    "/account-based-nurturing.html",
    "/get-it-right-with-abm.html",
    "/blog/accelerate-your-sales.html",
    "/solutions/lead-management.html",
    "/solutions/abm.html",
    "/blog/digital-marketing-financial",
    "/top5-digital-engagement-themes.html",
    "/reboot-europe-tech-industry.html"
],
utm = [{
        "terms": [
            "marketo",
            "marketo demo",
            "marketo webinar",
            "marketo event",
            "marketo blog",
            "marketing automation",
            "marketing solutions",
            "marketing analytics",
            "marketing nation",
            "engagement platform",
            "engagement engine",
            "account based marketing",
            "lead management",
            "email marketing",
            "consumer marketing",
            "customer base marketing",
            "mobile marketing"
        ],
        "campaigns": [
            "Marketing Automation",
            "Account Based Marketing",
            "Email Engagement",
            "Mobile Engagement",
            "Social Integration",
            "Digital Ad Targeting",
            "Web Personalization",
            "Marketing Analytics",
            "Predictive Content"
        ]
    }, {
        "terms": [
            "turner tech",
            "turner demo",
            "turner webinar",
            "turner event",
            "turner blog",
            "cloud storage",
            "cloud backup",
            "cloud management",
            "data protection",
            "data compliance"
        ],
        "campaigns": [
            "Data Protection",
            "HIPPA Data Compliance",
            "Cloud Backup",
            "Cloud Storage",
            "Virtualized Backup",
            "Hybrid Cloud Backup",
            "Data Continuity",
            "Instant Data Recovery"
        ]
    }
],
utmMediums = [
    "CPC",
    "CPM",
    "CPA"
],
abmLeads = [{
        hash: "e91fea75734eeee375a1c0ad4c14bb16703aa0d0",
        email: "mktodemosvcs+1130@gmail.com"
    }, {
        hash: "3740cb0137c946959027f48be1b62df72601243f",
        email: "mktodemosvcs+1131@gmail.com"
    }, {
        hash: "9f8c199f279e7fc954b62a8484ee3584f3419e6c",
        email: "mktodemosvcs+1136@gmail.com"
    }, {
        hash: "d03c98a512f7aa85e794f8867bd6d1aac37ea3ce",
        email: "mktodemosvcs+1097@gmail.com"
    }, {
        hash: "adc6481dba82149a69c2165ada11c3116e72c3a1",
        email: "mktodemosvcs+1085@gmail.com"
    }, {
        hash: "149bca301f1f5f2b0d4b9e1d0c65e05072a6dd2b",
        email: "mktodemosvcs+1108@gmail.com"
    }, {
        hash: "613ac7814a7b133b4c48cd08c28dcdb2925c6c90",
        email: "mktodemosvcs+1089@gmail.com"
    }, {
        hash: "c8c630d55b53eb1ef5e9d70596ad8036de4983bc",
        email: "mktodemosvcs+1120@gmail.com"
    }, {
        hash: "c15265d94b1d17ba6e1bdb70a51fb926523ccc0b",
        email: "mktodemosvcs+1123@gmail.com"
    }, {
        hash: "1bfa2fcecb9fea94d8263e1d1d833720145e4d15",
        email: "mktodemosvcs+1126@gmail.com"
    }, {
        hash: "18bd935f7f0e497eb8689a515aadaf066fd839a9",
        email: "mktodemosvcs+1129@gmail.com"
    }, {
        hash: "a9da34ec14ea5ddd33ac147fa1ae42e74022b099",
        email: "mktodemosvcs+1143@gmail.com"
    }, {
        hash: "31adac9d23710b02b6746b6fdf65d52d85595401",
        email: "mktodemosvcs+1152@gmail.com"
    }, {
        hash: "9452440a23f294ea5879d0882a9d1858d5fe23e8",
        email: "mktodemosvcs+1158@gmail.com"
    }, {
        hash: "e141b50b825f3f2fe89adcf1d267bb8b520965c2",
        email: "mktodemosvcs+1161@gmail.com"
    }, {
        hash: "6093a7828db75e5c89316d69d6f78304cc88dbe3",
        email: "mktodemosvcs+1162@gmail.com"
    }, {
        hash: "f5bbd3a31d25b6e84c0e2a4d50822d3ac06cd43c",
        email: "mktodemosvcs+1163@gmail.com"
    }, {
        hash: "15796656549a867967c3a7d805bfa4ff81abb63e",
        email: "mktodemosvcs+1165@gmail.com"
    }, {
        hash: "a60a39bd29412b6bf90334aea8150fcdf8eff7fc",
        email: "mktodemosvcs+1168@gmail.com"
    }, {
        hash: "c168a871d48c7fdcc4262a658e3a203cc6185acd",
        email: "mktodemosvcs+1171@gmail.com"
    }, {
        hash: "aa6d5d20f3c519591fc1c7d1362541839193aa48",
        email: "mktodemosvcs+1174@gmail.com"
    }, {
        hash: "40947ef64bbae81440db66167ba291e88465ff3d",
        email: "mktodemosvcs+1176@gmail.com"
    }, {
        hash: "c61c6110cf3c700954d180b17a59f4ab4a7dac13",
        email: "mktodemosvcs+1186@gmail.com"
    }, {
        hash: "8afce39e2b5c0a1186fae50deef75e946630fe49",
        email: "mktodemosvcs+1201@gmail.com"
    }, {
        hash: "5aff8c0a10d48b552356b0227f54b92e186acfd9",
        email: "mktodemosvcs+1111@gmail.com"
    }, {
        hash: "f22535c8370f54e0fa905994eb417251a8770157",
        email: "mktodemosvcs+1003@gmail.com"
    }, {
        hash: "aec5288554070e6f3c8ce0cebd8644921075c657",
        email: "mktodemosvcs+1004@gmail.com"
    }, {
        hash: "1e989d2ad20e2d9d805cd9a5de6fbef897f558a3",
        email: "mktodemosvcs+1026@gmail.com"
    }, {
        hash: "943f97052e9e9a4097ec4067e2dbdf5385d6fcc6",
        email: "mktodemosvcs+1030@gmail.com"
    }, {
        hash: "f83e490e0afaa225b4c2ad9635c08e13566b93fa",
        email: "mktodemosvcs+1015@gmail.com"
    }, {
        hash: "7d778f0382a3b6af7fe88d59a72f457a69aadf19",
        email: "mktodemosvcs+1033@gmail.com"
    }, {
        hash: "d0d22487953e23079101fe20cf69c203283269a9",
        email: "mktodemosvcs+1017@gmail.com"
    }, {
        hash: "986dcdc0cb373ce6a4c34197ac252888fa972aca",
        email: "mktodemosvcs+1023@gmail.com"
    }, {
        hash: "2a021465cdb28fe05bf040a197c38ddfab311e9d",
        email: "mktodemosvcs+1063@gmail.com"
    }, {
        hash: "263073da8924a478d5830e9d11775acc119904ee",
        email: "mktodemosvcs+1049@gmail.com"
    }, {
        hash: "9c9f0b35bddd67829061ef9d6eb212533acb40ef",
        email: "mktodemosvcs+1051@gmail.com"
    }, {
        hash: "ec8d7ae3997645f433a8871329ca046ea1d63da5",
        email: "mktodemosvcs+1064@gmail.com"
    }, {
        hash: "faf4437854a6a407efd1b6c0918eaca8e9d74e37",
        email: "mktodemosvcs+1065@gmail.com"
    }, {
        hash: "f1321fad25976853bc17ba104bec26e4493160ee",
        email: "mktodemosvcs+1052@gmail.com"
    }, {
        hash: "c48b843a94dec02cbd2d32a94cc5529348801b03",
        email: "mktodemosvcs+1053@gmail.com"
    }, {
        hash: "7818513548f186fd5d9a7b8d38b04e523d6c3330",
        email: "mktodemosvcs+1071@gmail.com"
    }, {
        hash: "74b980349c99f67073adebdd587c4fb5b05c1a13",
        email: "mktodemosvcs+1054@gmail.com"
    }, {
        hash: "9115eea975e011ecc02c594db5c2f92211936093",
        email: "mktodemosvcs+1055@gmail.com"
    }, {
        hash: "5093d33e1198278f96c4df0f17ebd43753386c7b",
        email: "mktodemosvcs+1078@gmail.com"
    }, {
        hash: "476c666881d7bf07553ec6231d1a684e06f51b6c",
        email: "mktodemosvcs+1079@gmail.com"
    }, {
        hash: "ae96530598ad0183ecbcdd1be486f4d3f091babc",
        email: "mktodemosvcs+1080@gmail.com"
    }, {
        hash: "5697a19bc2453f736f9b59ef4acbeca01d1e0427",
        email: "mktodemosvcs+1056@gmail.com"
    }, {
        hash: "25cc3abbb9e0eacd4a915b69255692212a5ba5c3",
        email: "mktodemosvcs+1043@gmail.com"
    }, {
        hash: "1613c5406135f957ec407abb1ab76ed4e9ddc6a7",
        email: "mktodemosvcs+jphandson@gmail.com"
    }
];

(function () {
    var didInit = false,
    s,
    origMunchkinInit,
    origMunchkinFunction;
    
    function getCookie(cookieName) {
        console.log("Getting > Cookie: " + cookieName);
        
        var name = cookieName + '=',
        cookies = document.cookie.split(';'),
        currCookie;
        
        for (var ii = 0; ii < cookies.length; ii++) {
            currCookie = cookies[ii].trim();
            if (currCookie.indexOf(name) == 0) {
                return currCookie.substring(name.length, currCookie.length);
            }
        }
        console.log("Getting > Cookie: " + cookieName + " not found");
        return null;
    }
    
    function webRequest(url, params, method, async, responseType, callback) {
        console.log("Web Request > " + url + "\n" + params);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (callback
                 && xmlHttp.readyState == 4
                 && xmlHttp.status == 200)
                callback(xmlHttp.response);
        }
        if (async
             && xmlHttp.responseType) {
            xmlHttp.responseType = responseType;
        }
        xmlHttp.open(method, url, async); // true for asynchronous
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(params);
    }
    
    function resetMunchkinCookie(munchkinId) {
        var result;
        
        if (getCookie("_mkto_trk")) {
            console.log("Removing > Cookie: _mkto_trk");
            document.cookie.replace(/;{0,1} {0,1}_mkto_trk=[^;]*/, "");
        }
        
        result = Munchkin.init(munchkinId, {
                cookieLifeDays: 365,
                cookieAnon: false,
                disableClickDelay: false
            });
        
        return result;
    }
    
    function submitLeadData() {
        var abmLeadX = abmLeads[Math.floor(Math.random() * abmLeads.length)],
        abmUrlX = abmUrls[Math.floor(Math.random() * abmUrls.length)],
        webPageX = webPages[Math.floor(Math.random() * webPages.length)],
        acquirePageX = acquirePages[Math.floor(Math.random() * acquirePages.length)],
        utmIndex = Math.floor(Math.random() * utm.length),
        utmTermX = utm[utmIndex].terms[Math.floor(Math.random() * utm[utmIndex].terms.length)],
        utmMediumX = utmMediums[Math.floor(Math.random() * utmMediums.length)],
        utmCampaignX = utm[utmIndex].campaigns[Math.floor(Math.random() * utm[utmIndex].campaigns.length)],
        mockLeadX,
        formPostUrl,
        isAbmMunchkinReset,
        isAbmAssociateLead,
        isAbmVisitWebPage,
        abmResetMunchkinResult = abmAssociateLeadResult = abmVisitWebPageResult = false,
        isMockMunchkinReset,
        isMockAssociateLead,
        isMockVisitWebPage,
        mockResetMunchkinResult = mockAssociateLeadResult = mockVisitWebPageResult = false;
        
        webRequest(mockLeadEndpoint, null, 'GET', false, '', function (response) {mockLeadX = response;});
        if (mockLeadX.mobileNumber == null) {
            mockLeadX.mobileNumber = "";
        }
        if (mockLeadX.phoneNumber == null) {
            mockLeadX.phoneNumber = "";
        }
        
        formPostUrlParams = "FirstName=" + encodeURIComponent(mockLeadX.firstName) + "&LastName=" + encodeURIComponent(mockLeadX.lastName) + "&Email=" + encodeURIComponent(mockLeadX.email) + "&Title=" + encodeURIComponent(mockLeadX.jobTitle) + "&Company=" + encodeURIComponent(mockLeadX.company) + "&Industry=" + encodeURIComponent(mockLeadX.industry) + "&LeadSource=" + encodeURIComponent(mockLeadX.leadSource) + "&MobilePhone=" + encodeURIComponent(mockLeadX.mobileNumber) + "&Phone=" + encodeURIComponent(mockLeadX.phoneNumber) + "&Lead_Type__c=Business&isMockLead=yes&utmTerm=" + encodeURIComponent(utmTermX) + "&utmMedium=" + encodeURIComponent(utmMediumX) + "&utmCampaign=" + encodeURIComponent(utmCampaignX) + "&formid=" + acquirePageX.formid + "&formVid=" + acquirePageX.formVid + "&lpId=" + acquirePageX.lpId + reqStaticParams;
        
        console.log("Posting > Mock Lead > Form Fill:\n" + JSON.stringify(mockLeadX, null, 2));
        webRequest("http://" + mktoLiveLandingPageHost + "/index.php/leadCapture/save2", formPostUrlParams, "POST", false, null, function (response) {
            console.log("Posted > Mock Lead > Form Fill: " + response)
        });
        
        abmResetMunchkinResult = resetMunchkinCookie(mktoLive106MunchkinId);
        isAbmMunchkinReset = window.setInterval(function () {
                if (abmResetMunchkinResult != false) {
                    console.log("Associating > ABM Lead: " + abmLeadX.email + " : " + abmUrlX);
                    window.clearInterval(isAbmMunchkinReset);
                    
                    if (abmLeadX.hash) {
                        abmAssociateLeadResult = Munchkin.munchkinFunction("associateLead", {
                                Email: abmLeadX.email
                            }, abmLeadX.hash);
                    } else {
                        abmAssociateLeadResult = Munchkin.munchkinFunction("associateLead", {
                                Email: abmLeadX.email
                            }, sha1("123123123" + abmLeadX.email));
                    }
                    isAbmAssociateLead = window.setInterval(function () {
                            if (abmAssociateLeadResult != false) {
                                console.log("Posting > ABM Lead > Visit Web Page: " + abmLeadX.email + " : " + abmUrlX);
                                window.clearInterval(isAbmAssociateLead);
                                
                                abmVisitWebPageResult = Munchkin.munchkinFunction("visitWebPage", {
                                        url: abmUrlX
                                    });
                            }
                        }, 0);
                }
            }, 0);
        
        isAbmVisitWebPage = window.setInterval(function () {
                if (abmVisitWebPageResult != false) {
                    window.clearInterval(isAbmVisitWebPage);
                    
                    mockResetMunchkinResult = resetMunchkinCookie(mktoLiveMunchkinId);
                    isMockMunchkinReset = window.setInterval(function () {
                            if (mockResetMunchkinResult != false) {
                                console.log("Associating > Mock Lead: " + mockLeadX.email);
                                window.clearInterval(isMockMunchkinReset);
                                
                                if (mockLeadX.hash) {
                                    mockAssociateLeadResult = Munchkin.munchkinFunction("associateLead", {
                                            Email: mockLeadX.email
                                        }, mockLeadX.hash);
                                } else {
                                    mockAssociateLeadResult = Munchkin.munchkinFunction("associateLead", {
                                            Email: mockLeadX.email
                                        }, sha1("123123123" + mockLeadX.email));
                                }
                                isMockAssociateLead = window.setInterval(function () {
                                        if (mockAssociateLeadResult != false) {
                                            window.clearInterval(isMockAssociateLead);
                                            console.log("Posting > Mock Lead > Visit Web Page: " + mockLeadX.email + " : " + webPageX);
                                            mockVisitWebPageResult = Munchkin.munchkinFunction("visitWebPage", {
                                                    url: webPageX
                                                });
                                        }
                                    }, 0);
                            }
                        }, 0);
                }
            }, 0);
    }
    
    function initMunchkin() {
        if (didInit === false) {
            didInit = true;
            submitLeadData();
        }
    }
    
    s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "//munchkin.marketo.net/munchkin.js";
    s.onreadystatechange = function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
            initMunchkin();
        }
    };
    s.onload = initMunchkin;
    document.getElementsByTagName("head")[0].appendChild(s);
})();