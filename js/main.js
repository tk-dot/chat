var _0x117966=_0x3224;function register(){var e=_0x3224,t=document[e(153)]("register-nama"),n=document.getElementById("register-email"),a=document.getElementById("register-bio"),o=document[e(153)](e(136)),r=document.getElementById("register-gender"),i=document[e(153)](e(154));i[e(271)]=e(156),""!=t[e(177)]&&""!=n[e(177)]&&""!=a[e(177)]&&""!=o[e(177)]?o[e(177)][e(190)]<6?i[e(271)]=e(229):auth[e(206)](n[e(177)],o[e(177)])[e(134)](o=>{var d=e;rdb[d(205)](d(175))[d(179)](o[d(245)][d(303)])[d(294)]({Nama:t.value,Bio:a[d(177)],Email:n.value,Tema:"light",Wallpaper:"default",Status:d(242),Gender:r[d(177)],UID:o[d(245)][d(303)],Foto:d(281)})[d(134)](()=>{var e=d;i[e(271)]=e(139),window.location[e(149)]()})}).catch(t=>{var n=e;i[n(271)]=t[n(278)]}):i[e(271)]=e(266)}function verifDulu(e){var t=_0x117966;auth.currentUser[t(274)]().then(()=>{var n=t;alert("Harap Verifikasi Terlebih Dahulu Dengan Link Yang Kami Kirimkan Ke "+e),window[n(251)][n(138)]=n(186)})[t(254)](n=>{var a=t;alert("Harap Verifikasi Terlebih Dahulu Dengan Link Yang Kami Kirimkan Ke "+e),window[a(251)].href=a(186)})}function signout(){var e=_0x117966;auth[e(221)](),window[e(251)][e(149)]()}function login(){var e=_0x117966,t=document[e(153)]("login-email")[e(177)],n=document[e(153)](e(293))[e(177)],a=document[e(153)](e(204));a[e(271)]=e(178),auth[e(305)](t,n).then(()=>{var t=e;a[t(271)]=t(150),window[t(251)].reload()})[e(254)](t=>{var n=e;a[n(271)]=t[n(278)]})}function forgot(){var e=_0x117966,t=document[e(153)](e(313));document[e(153)](e(244))[e(271)]=e(178),""==t[e(177)]?document[e(153)](e(244))[e(271)]=e(159):auth[e(213)](t.value)[e(134)](()=>{var t=e;document[t(153)](t(244)).innerHTML=t(162)})[e(254)](t=>{var n=e;document[n(153)]("forgot-err").innerHTML=t[n(278)]})}function backProfil(){openProfil.click()}function uploadFeed(){document[_0x117966(153)]("choose-file").click()}!function(e,t){for(var n=_0x3224,a=_0x4241();;)try{if(197037===-parseInt(n(152))/1*(parseInt(n(279))/2)+parseInt(n(277))/3*(parseInt(n(185))/4)+parseInt(n(181))/5*(-parseInt(n(232))/6)+-parseInt(n(230))/7+-parseInt(n(295))/8+-parseInt(n(239))/9*(parseInt(n(325))/10)+parseInt(n(238))/11*(parseInt(n(285))/12))break;a.push(a.shift())}catch(e){a.push(a.shift())}}(),auth[_0x117966(208)](e=>{var t=_0x117966;e?e.emailVerified?(document[t(153)](t(210)).style[t(309)]=t(202),document[t(153)]("inside")[t(191)][t(309)]=t(300),loadprofil(),settheme(),introDulu(),deteksiLast()):verifDulu(e[t(140)]):(document[t(153)](t(210))[t(191)][t(309)]=t(300),document.getElementById(t(275)).style[t(309)]=t(202),introDulu())}),document[_0x117966(153)](_0x117966(165))[_0x117966(133)]=function(){var e=_0x117966;document[e(153)](e(168))[e(191)].display=e(202),document[e(153)]("konten")[e(191)].display=e(300),window[e(233)]("resize",()=>{var t=e;window[t(170)]<950?(document[t(153)]("konten")[t(191)][t(309)]="block",document[t(153)](t(168))[t(191)][t(309)]=t(202)):(document[t(153)](t(321)).style.display="block",document[t(153)](t(168))[t(191)][t(309)]=t(300))})},document[_0x117966(153)](_0x117966(166))[_0x117966(133)]=function(){var e=_0x117966,t=document[e(153)](e(328));if(""!=t[e(177)]&&" "!=t[e(177)]&&null!=t[e(177)]){var n={};n[e(312)]=t[e(177)],rdb[e(205)](e(175)).child(auth[e(283)][e(303)])[e(148)](n),t[e(177)]="",openProfil.click()}},document[_0x117966(153)](_0x117966(272))[_0x117966(133)]=function(){var e=_0x117966,t=document[e(153)](e(235));if(""!=t.value&&" "!=t[e(177)]&&null!=t[e(177)]){var n={};n[e(145)]=t[e(177)],rdb.ref(e(175))[e(179)](auth[e(283)][e(303)])[e(148)](n),t.value="",openProfil[e(261)]()}},document[_0x117966(153)](_0x117966(228)).onchange=function(){var e=_0x117966;if(""!=this[e(177)]&&null!=this[e(177)]){var t={};t[e(276)]=this.value,rdb.ref(e(175))[e(179)](auth[e(283)][e(303)])[e(148)](t)}},document[_0x117966(153)](_0x117966(167))[_0x117966(133)]=function(){var e=_0x117966;document[e(153)](e(141))[e(261)]()},document[_0x117966(153)](_0x117966(141)).onchange=function(){var e=_0x117966,t=this.files[0];if("image/*"==!t[e(308)][e(135)])return alert(e(220));var n=stg.ref(e(187)+auth.currentUser[e(303)]+e(284))[e(301)](t);document[e(153)](e(167)).style.display="none",document.getElementById(e(172)).innerHTML="Sedang Mengupload . . .",n.on(e(223),()=>{console[e(146)]("Mengupload")},t=>{alert(t[e(278)])},()=>{var t=e;document[t(153)](t(167))[t(191)].display=t(300),document[t(153)]("ket-foto")[t(271)]="",n[t(287)][t(205)][t(192)]()[t(134)](e=>{var n=t,a={};a[n(240)]=e,rdb.ref(n(175)).child(auth.currentUser[n(303)]).update(a)})[t(134)](()=>{var e=t;openProfil[e(261)](),window.location[e(149)]()})})};const pilihGambarFeedFile=document.getElementById(_0x117966(183)),imgPreview=document[_0x117966(153)]("img-preview");function getImgData(){var e=_0x117966;const t=pilihGambarFeedFile[e(327)][0];if(!t.type[e(173)](e(259)))return alert(e(220));if(t){const n=new FileReader;n[e(215)](t),n.addEventListener(e(319),function(){var t=e;imgPreview[t(191)].display=t(300),imgPreview[t(271)]=t(151)+this.result+t(320)})}}function submitFeed(){var e=_0x117966,t=document[e(153)]("proses-feed"),n=document[e(153)](e(282)),a=pilihGambarFeedFile.files[0];if(!a)return alert(e(326));if(!a[e(308)][e(173)](e(259)))return alert(e(220));var o=stg[e(205)](e(227)+auth.currentUser[e(303)]+"/"+a.name)[e(301)](a);o.on(e(223),()=>{var n=e;t.innerHTML=n(184)},e=>{t.innerHTML="<span>"+e.message+"</span>"},()=>{var a=e;o[a(287)][a(205)][a(192)]()[a(134)](e=>{var o=a;rdb[o(205)](o(175))[o(179)](auth.currentUser[o(303)]).on(o(177),a=>{var r=o,i=a.val()[r(312)],d=new Date,u=[r(217),r(318),r(203),r(260),r(302),r(317),r(199),r(246),"September",r(249),r(207),r(224)],l=[r(324),r(137),r(155),r(201),r(257),r(219),r(176)],c={};c[r(258)]=r(322);var m=c,s={};s.year=r(182);var p=s,g={hour:"numeric"};g[r(273)]=r(182),g[r(189)]=!1;var f={counter:1e4-counter,Pengirim:i,Gambar:e,Deskripsi:n[r(177)],Jam:l[d.getDay()]+" "+d[r(314)](r(214),g),Tanggal:d[r(218)](r(214),m)+" "+u[d[r(264)]()]+" "+d.toLocaleDateString(r(214),p)};rdb[r(205)](r(194))[r(234)]()[r(294)](f),t.innerHTML=r(180)})}).then(()=>{var e=a;openFeed[e(261)](),n.value="",imgPreview[e(191)].display="none",imgPreview[e(271)]="",window[e(251)].reload()})})}pilihGambarFeedFile[_0x117966(233)]("change",function(){getImgData()});var counter=0;function wallSet(){var e=_0x117966;document[e(153)](e(169))[e(261)]()}function _0x4241(){var e=["Berhasil Mengirim Email Ganti Sandi","Nov","Jan","edit-profil","submit-nama","input-foto","field","input-wallpaper","innerWidth",'<span class="spin-chat" id="spin-chat"></span>',"ket-foto","match","option","users","Sabtu","value","Memeriksa..","child","<p>Berhasil Mengunggah Feed!</p>","1850TgIRJR","numeric","choose-file","<p>Mengunggah Feed...</p>","16oFsoWJ","https://mail.google.com","users/","temanNama","hour12","length","style","getDownloadURL","querySelector","feed","darkmode","serclose","#input-nama","temanFoto","Juli","which","Rabu","none","Maret","login-err","ref","createUserWithEmailAndPassword","November","onAuthStateChanged","class","outside","onchange","flex","sendPasswordResetEmail","en-US","readAsDataURL","grup","Januari","toLocaleDateString","Jumat","Dilarang Pilih Selain File Gambar!!!","signOut","Mar","state_changed","Desember","#input-grup-info","default","feeds/","submit-gender","Password Minimal 6 Karakter","2723679FyeFUJ","light","5226hNKseI","addEventListener","push","input-bio","Feb","Isi Minimal 20 Karakter!","11EsJqtL","3717VgFxwC","Foto","#input-bio","member","input-report","forgot-err","user","Agustus","#register-bio","inline","Oktober","fromCharCode","location","resize","setAttribute","catch","Jul","dark","Kamis","day","image/*","April","click","Apr","lightmode","getMonth","hour","Harap Isi Semua Bidang","UID","profil-kembali","japri","credential","innerHTML","submit-bio","minute","sendEmailVerification","inside","Gender","281661JfdDDr","message","122erkTlZ","Tema","https://chat.tkdot.tk/img/user.png","info-feed","currentUser","https://chat.tkdot.tk/img/user.png","15745056jfHDKb","global","snapshot","removeAttribute","#register-nama","/wallpaper.jpg","body","fal fa-check-circle","login-password","set","1421208Iegkfl","report-err","Tidak bisa membuka akun yang terhapus","Z0NK","add","block","put","Mei","uid","auth","signInWithEmailAndPassword","del-password","reauthenticateWithCredential","type","display","remove","room","Nama","forgot-email","toLocaleString","menu","Wallpaper","Juni","Februari","load",'" />',"konten","2-digit","Des","Minggu","5360yPkLdR","Pilih Gambar Dulu Dong","files","input-nama","onclick","then","macth","register-password","Senin","href","Berhasil Membuat Akun","email","submit-foto","delete","keypress","submit-report","Bio","log","Akun Dihapus","update","reload","Berhasil Masuk!",'<img src="',"6233vdPuEk","getElementById","register-err","Selasa","Memuat","del-sukses","kecoa","Harap isi semua bidang!","Agu","val"];return(_0x4241=function(){return e})()}function _0x3224(e,t){var n=_0x4241();return(_0x3224=function(e,t){return n[e-=133]})(e,t)}function wallReset(){var e=_0x117966,t={};t[e(316)]=e(226),rdb.ref("users")[e(179)](auth.currentUser[e(303)])[e(148)](t).then(()=>{var t=document[e(153)]("spin-chat");t&&t.remove()})}function settheme(){var e=_0x117966;rdb[e(205)](e(175))[e(179)](auth[e(283)][e(303)]).on(e(177),t=>{var n=e;t[n(161)]()[n(280)]==n(256)?(document[n(193)](n(291))[n(253)](n(209),n(256)),document.getElementById(n(195))[n(191)].display=n(202),document[n(153)](n(263))[n(191)][n(309)]=n(248)):(document[n(153)]("darkmode")[n(191)][n(309)]=n(248),document[n(153)](n(263))[n(191)].display=n(202))})}function deteksiChat(){var e=_0x117966;1==nmCepe?(document.getElementById(e(174)).style.display=e(212),document[e(153)](e(321))[e(191)][e(309)]=e(300),window[e(170)]<950?(document[e(153)](e(168))[e(191)][e(309)]=e(202),document[e(153)](e(315))[e(191)][e(309)]=e(212)):(document[e(153)](e(168))[e(191)].display=e(300),document[e(153)](e(315))[e(191)][e(309)]="block"),window[e(233)](e(252),()=>{var t=e;window[t(170)]>950?(document[t(153)](t(321))[t(191)][t(309)]=t(300),document[t(153)]("option")[t(191)][t(309)]=t(300),document.getElementById("menu")[t(191)].display=t(300),document[t(153)](t(168)).style.display="block"):(document[t(153)](t(321)).style.display=t(300),document.getElementById(t(174))[t(191)].display=t(212),document[t(153)](t(315))[t(191)].display=t(212),document.getElementById(t(168))[t(191)].display=t(202))})):(window[e(170)]<950?(dlmFeed.style[e(309)]=e(202),dlmProfil[e(191)][e(309)]=e(202),dlmCepe[e(191)][e(309)]=e(300),document[e(153)](e(174))[e(191)][e(309)]=e(202),document[e(153)](e(315))[e(191)][e(309)]=e(202),document.getElementById(e(168))[e(191)][e(309)]=e(300)):(dlmFeed[e(191)][e(309)]=e(202),dlmProfil.style[e(309)]=e(202),dlmCepe[e(191)][e(309)]=e(300),document[e(153)](e(174))[e(191)][e(309)]=e(300),document[e(153)]("menu")[e(191)][e(309)]=e(300),document[e(153)](e(168))[e(191)][e(309)]="block"),window[e(233)](e(252),()=>{var t=e;window[t(170)]>950?(document[t(153)](t(321))[t(191)].display=t(300),document[t(153)](t(174))[t(191)][t(309)]=t(300),document[t(153)]("menu")[t(191)][t(309)]="block",document[t(153)]("field").style[t(309)]="block"):(document[t(153)]("konten")[t(191)][t(309)]=t(300),document[t(153)]("option")[t(191)].display="none",document.getElementById(t(315))[t(191)].display=t(202),document[t(153)](t(168))[t(191)][t(309)]=t(300))}))}function bikinFeed(){var e=_0x117966;window[e(170)]<950?(document[e(153)](e(168))[e(191)][e(309)]=e(202),document[e(153)](e(321))[e(191)][e(309)]="block"):(document[e(153)](e(168))[e(191)].display=e(300),document[e(153)](e(321))[e(191)].display=e(300)),window[e(233)](e(252),()=>{var t=e;window[t(170)]<950?(document[t(153)]("field")[t(191)].display=t(202),document[t(153)](t(321))[t(191)][t(309)]=t(300)):(document[t(153)]("field")[t(191)][t(309)]=t(300),document[t(153)](t(321)).style[t(309)]="block")})}function deteksiFeed(){var e=_0x117966;window[e(170)]<950?(document[e(153)](e(168)).style[e(309)]=e(300),document[e(153)](e(174)).style[e(309)]="block",document[e(153)](e(315)).style.display=e(212),document[e(153)](e(321))[e(191)].display=e(202)):(document[e(153)](e(168)).style[e(309)]=e(300),document.getElementById("menu")[e(191)].display="block",document[e(153)](e(174)).style[e(309)]=e(300),document[e(153)](e(321))[e(191)][e(309)]=e(300)),window[e(233)](e(252),()=>{var t=e;window.innerWidth<950?(document[t(153)](t(174))[t(191)][t(309)]=t(300),document.getElementById(t(168))[t(191)][t(309)]=t(300),document[t(153)](t(315))[t(191)][t(309)]=t(212),document.getElementById(t(321))[t(191)][t(309)]="none"):(document[t(153)](t(174))[t(191)][t(309)]=t(300),document.getElementById(t(168))[t(191)][t(309)]=t(300),document.getElementById(t(315))[t(191)][t(309)]=t(300),document[t(153)](t(321))[t(191)][t(309)]=t(300))})}function deteksiKartu(){var e=_0x117966;window[e(170)]<950?(document[e(153)](e(168))[e(191)].display=e(300),document.getElementById(e(321))[e(191)][e(309)]=e(202),document[e(153)](e(268))[e(191)].display=e(300),document.getElementById(e(174))[e(191)][e(309)]=e(300),document.getElementById(e(315)).style.display=e(212),document[e(153)](e(165))[e(191)][e(309)]=e(202)):(document[e(153)](e(168))[e(191)][e(309)]=e(300),document.getElementById(e(321))[e(191)][e(309)]=e(300),document[e(153)](e(268))[e(191)][e(309)]=e(202),document[e(153)]("option").style[e(309)]="block",document[e(153)](e(315)).style[e(309)]=e(300),document[e(153)](e(165)).style.display=e(202)),window[e(233)](e(252),()=>{var t=e;window[t(170)]<950?(document[t(153)](t(168)).style[t(309)]=t(300),document[t(153)](t(321)).style.display=t(202),document[t(153)]("profil-kembali")[t(191)].display=t(300),document.getElementById(t(174))[t(191)][t(309)]="block",document[t(153)]("menu")[t(191)].display="flex",document[t(153)](t(165))[t(191)][t(309)]=t(202)):(document.getElementById(t(268))[t(191)][t(309)]=t(202),document[t(153)](t(168))[t(191)][t(309)]="block",document[t(153)]("konten").style[t(309)]=t(300),document[t(153)](t(174))[t(191)][t(309)]="block",document[t(153)](t(315))[t(191)].display=t(300),document.getElementById(t(165))[t(191)][t(309)]="none")})}function deteksiProfil(){var e=_0x117966;1==nmProfil?window[e(170)]>950?(document[e(153)](e(321))[e(191)].display=e(300),document.getElementById(e(168))[e(191)][e(309)]=e(300)):(document[e(153)]("konten")[e(191)][e(309)]=e(202),document.getElementById(e(168))[e(191)][e(309)]=e(300)):window[e(170)]<950?(dlmProfil[e(191)].display=e(202),dlmCepe[e(191)][e(309)]=e(202),dlmFeed[e(191)].display="none",document[e(153)]("konten")[e(191)][e(309)]=e(300),document[e(153)](e(168))[e(191)][e(309)]="none"):(document.getElementById("konten")[e(191)][e(309)]=e(300),document[e(153)](e(168))[e(191)][e(309)]=e(300)),window[e(233)](e(252),()=>{var t=e;window.innerWidth>950?(document[t(153)](t(321))[t(191)][t(309)]=t(300),document[t(153)]("field")[t(191)][t(309)]="block"):(document[t(153)]("konten").style[t(309)]="none",document[t(153)](t(168))[t(191)][t(309)]=t(300))})}function deleteaccount(e){var t=_0x117966,n=document.getElementById(t(306)),a=stg[t(205)]("users/"+auth[t(283)].uid+t(284)),o=stg.ref("users/"+auth[t(283)][t(303)]+t(290)),r={};r[t(312)]=t(147),r[t(240)]="https://chat.tkdot.tk/img/delprof.png",r[t(267)]=t(298);var i=r,d=firebase[t(304)]()[t(283)],u=firebase[t(304)].EmailAuthProvider[t(270)](d[t(140)],n[t(177)]);d[t(307)](u)[t(134)](()=>{var e=t;a[e(142)]()[e(134)](()=>{var t=e;o&&o.delete(),rdb[t(205)](t(175))[t(179)](auth.currentUser.uid).set(i)[t(134)](()=>{var e=t;d.delete()[e(134)](()=>{var t=e;document[t(153)]("del-proses")[t(191)].display=t(202),document.getElementById(t(157))[t(191)].display=t(300)})[e(254)](t=>{alert(t[e(278)])})})[t(254)](e=>{alert(e[t(278)])})}).catch(t=>{alert(t[e(278)])})})[t(254)](()=>{var e=t;alert("Password Salah!"),document[e(153)](e(306)).value=""})}function akunTerhapus(){alert(_0x117966(297))}function deteksiLast(){var e=_0x117966;rdb[e(205)](e(175))[e(179)](auth[e(283)][e(303)]).on(e(177),t=>{var n=e,a=t.val().last;t[n(161)]()[n(311)],t[n(161)]()[n(198)],t[n(161)]()[n(188)];"profil"==a?openProfil.click():a==n(194)?openFeed.click():a==n(269)?(openPesan.click(),kirimPesanPribadi(t[n(161)]()[n(188)],t[n(161)]()[n(198)],t[n(161)]().room)):a==n(216)?(openGrup.click(),grupChange(),loadmessageGrup(t[n(161)]()[n(188)],t[n(161)]()[n(311)])):a==n(286)?(openPesan[n(261)](),globalChange(),openGL()):openProfil[n(261)]()})}document[_0x117966(153)]("input-wallpaper")[_0x117966(211)]=function(){var e=_0x117966,t=document.getElementById(e(169))[e(327)][0];if(!t.type[e(173)](e(259)))return alert(e(220));var n=stg[e(205)](e(187)+auth[e(283)][e(303)]+e(290)).put(t);document.getElementById("sp")[e(271)]+=e(171),n.on(e(223),()=>{console[e(146)]("mengupload wallpaper")},t=>{alert(t[e(278)])},()=>{var t=e;n[t(287)][t(205)][t(192)]().then(e=>{var n=t,a={};a.Wallpaper=e,rdb.ref(n(175))[n(179)](auth[n(283)][n(303)])[n(148)](a),document.getElementById("spin-chat")[n(310)]()})})},document[_0x117966(153)](_0x117966(195)).onclick=function(){var e=_0x117966,t={};t.Tema=e(256),rdb[e(205)](e(175)).child(auth.currentUser[e(303)])[e(148)](t)},document[_0x117966(153)]("lightmode")[_0x117966(133)]=function(){var e=_0x117966;document[e(193)](e(291))[e(288)](e(209));var t={};t[e(280)]=e(231),rdb[e(205)](e(175))[e(179)](auth[e(283)].uid)[e(148)](t)},$(_0x117966(197))[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),$(_0x117966(241))[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e.which)[t(173)](/[A-Za-z0-9&. ]/))return!1}),$(_0x117966(289)).keypress(function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),$(_0x117966(247))[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),$("#input-grup-nama")[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),$(_0x117966(225))[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)]).match(/[A-Za-z0-9&. ]/))return!1}),$("#info-feed")[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),$(".chatting")[_0x117966(143)](function(e){var t=_0x117966;if(!String[t(250)](e[t(200)])[t(173)](/[A-Za-z0-9&. ]/))return!1}),document[_0x117966(153)](_0x117966(144)).onclick=(()=>{var e=_0x117966,t=document[e(153)](e(144)),n=document[e(153)](e(158)),a=document[e(153)](e(243)),o=new Date,r={day:"2-digit"},i=r,d=[e(164),e(236),e(222),e(262),e(302),"Jun",e(255),e(160),"Sep","Okt",e(163),e(323)],u={year:"numeric"},l=u,c=o[e(218)](e(214),i)+" "+d[o.getMonth()]+" "+o[e(218)](e(214),l),m={};m[e(265)]=e(182),m[e(273)]=e(182),m[e(189)]=!1;var s=(new Date)[e(314)](e(214),m);return a[e(177)][e(190)]<=19?void(document[e(153)](e(296))[e(271)]=e(237)):(document[e(153)](e(296)).innerHTML="Memeriksa..",void rdb.ref("users").child(auth[e(283)][e(303)]).on(e(177),o=>{var r=e;dcm.collection("report")[r(299)]({Report:a[r(177)],Pengirim:o[r(161)]()[r(312)],UID:auth[r(283)][r(303)],Waktu:s+" - "+c})[r(134)](()=>{var e=r;document[e(153)]("report-err")[e(271)]="Sukses Mengirim Report",t[e(310)](),a.remove(),n[e(253)](e(209),e(292)),a.value="",document[e(153)](e(196))[e(261)](),setTimeout(()=>{var t=e;window[t(251)][t(149)]()},5e3)})}))});
