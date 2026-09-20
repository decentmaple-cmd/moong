/* ============================================
   config.js
   여기 안의 값만 바꾸면 사이트 내용이 바뀝니다.
   ============================================ */
var CFG = {

  /* 브라우저 탭에 표시될 제목 */
  siteTitle: "달빛 아래, 나의 페이지",

  /* ── 프로필 ── */
  profile: {
    nameMain: "이서 ",
    nameAccent: "달",
    hearts: 3,                 // 하트 개수
    image: "",                 // 프로필 사진 주소 (비워두면 기본 아이콘 표시)
    bubble: "놀러와줘서 고마워요 :)",
    debutDate: "2024-03-01",   // D-day 계산용 (YYYY-MM-DD)

    rows: [
      { key: "생일",   value: "3월 21일" },
      { key: "소속",   value: "프리랜서" },
      { key: "데뷔",   value: "", dday: true },
      { key: "좋아하는 것", value: "밤산책 · 라디오 · 우유" },
      { key: "홈페이지", value: "https://example.com" }
    ],

    links: [
      { label: "치지직",     url: "https://chzzk.naver.com/", icon: "🌙" },
      { label: "유튜브",     url: "https://youtube.com/",     icon: "▶" },
      { label: "X (트위터)", url: "https://twitter.com/",     icon: "✦" },
      { label: "인스타그램", url: "https://instagram.com/",   icon: "◒" }
    ]
  },

  /* ── 이번주 일정 (구글 캘린더 연동) ──
     apiKey / calendarId 를 채우면 자동으로 이번주 일정이 표시됩니다.
     비워두면 매일 "쉬는 날"로만 표시돼요. */
  calendar: {
    sectionTitle: "이번주 일정",
    apiKey: "",
    calendarId: "",
    timezone: "Asia/Seoul",
    specialDate: "",       // 특별히 강조할 날짜 (YYYY-MM-DD)
    emptyText: "쉬는 날",
    pollMinutes: 60,
    schedulePage: ""       // 일정 전체 페이지가 있다면 경로 입력
  }
};
