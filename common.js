/* ============================================
   common.js
   여러 페이지에서 함께 쓰는 공통 함수 모음
   ============================================ */

/* HTML 특수문자 이스케이프 (XSS 방지 겸 안전한 출력용) */
function esc(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
  });
}

/* 다국어 확장을 대비한 텍스트 통과 함수 (지금은 그대로 반환) */
function T(s){ return s; }

/* 이름 전체(본명+애칭)를 한 번에 반환 */
function fullName(){
  var p = (CFG && CFG.profile) || {};
  return (p.nameMain || '') + (p.nameAccent || '');
}

/* 페이지 공통 초기화: 탭 제목, 현재 페이지 네비게이션 표시 */
function initPage(currentHref){
  document.title = (CFG && CFG.siteTitle) || fullName() || '';
  document.querySelectorAll('nav a, .navlink').forEach(function(a){
    if (a.getAttribute('href') === currentHref) a.classList.add('on');
  });
}

/* 소셜 링크 목록을 지정한 셀렉터 안에 그려줌 */
function renderLinks(selector){
  var box = document.querySelector(selector);
  if (!box) return;
  var links = (CFG.profile && CFG.profile.links) || [];
  box.innerHTML = links.map(function(l){
    return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">'
         + (l.icon ? '<span class="ico">' + esc(l.icon) + '</span>' : '')
         + '<span>' + esc(l.label) + '</span></a>';
  }).join('');
}

/* ============================================
   DB - 관리자 페이지에서 저장한 값을 읽어오는 자리
   지금은 백엔드가 없으므로 브라우저의 localStorage를 사용합니다.
   나중에 실제 서버/관리자 페이지를 붙이면 이 부분만 교체하면 됩니다.
   ============================================ */
var DB = {
  settings: function(){
    return new Promise(function(resolve){
      try{
        var raw = localStorage.getItem('site_settings');
        resolve(raw ? JSON.parse(raw) : {});
      }catch(e){
        resolve({});
      }
    });
  }
};
