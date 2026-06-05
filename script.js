// TỰ ĐIỂN MÃ HÓA TÊN NƯỚC SANG MÃ ISO ĐỂ LẤY CỜ QUỐC GIA TỰ ĐỘNG TỪ FLAGCDN
const countryCodes = {
    "Mexico": "mx", "Nam Phi": "za", "Hàn Quốc": "kr", "CH Czech": "cz",
    "Canada": "ca", "Bosnia & Herz.": "ba", "Mỹ": "us", "Paraguay": "py",
    "Qatar": "qa", "Thụy Sĩ": "ch", "Brazil": "br", "Morocco": "ma",
    "Haiti": "ht", "Scotland": "gb-sct", "Australia": "au", "Thổ Nhĩ Kỳ": "tr",
    "Đức": "de", "Curaçao": "cw", "Hà Lan": "nl", "Nhật Bản": "jp",
    "Bờ Biển Ngà": "ci", "Ecuador": "ec", "Thụy Điển": "se", "Tunisia": "tn",
    "Tây Ban Nha": "es", "Cape Verde": "cv", "Bỉ": "be", "Ai Cập": "eg",
    "Saudi Arabia": "sa", "Uruguay": "uy", "Iran": "ir", "New Zealand": "nz",
    "Pháp": "fr", "Senegal": "sn", "Iraq": "iq", "Na Uy": "no",
    "Argentina": "ar", "Algeria": "dz", "Áo": "at", "Jordan": "jo",
    "Bồ Đào Nha": "pt", "CHDC Congo": "cd", "Anh": "gb-eng", "Croatia": "hr",
    "Ghana": "gh", "Panama": "pa", "Uzbekistan": "uz", "Colombia": "co"
};

// Hàm lấy link ảnh cờ từ tên nước
function getFlagUrl(countryName) {
    const code = countryCodes[countryName];
    return code ? `https://flagcdn.com/w40/${code}.png` : `https://flagcdn.com/w40/un.png`;
}

// DANH SÁCH 72 TRẬN ĐẤU VÒNG BẢNG WORLD CUP 2026 (TRẠNG THÁI NGUYÊN BẢN CHƯA ĐÁ)
const matchesData = [
    { id: 1, team1: "Mexico", team2: "Nam Phi", date: "2026-06-12T02:00:00", stadium: "Sân vận động Azteca", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 55, draw: 25, win2: 20, hasEnded: false },
    { id: 2, team1: "Hàn Quốc", team2: "CH Czech", date: "2026-06-12T09:00:00", stadium: "Sân vận động Akron", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 38, draw: 30, win2: 32, hasEnded: false },
    { id: 3, team1: "Canada", team2: "Bosnia & Herz.", date: "2026-06-13T02:00:00", stadium: "BMO Field (Toronto)", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 45, draw: 28, win2: 27, hasEnded: false },
    { id: 4, team1: "Mỹ", team2: "Paraguay", date: "2026-06-13T08:00:00", stadium: "Sân vận động SoFi", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 52, draw: 26, win2: 22, hasEnded: false },
    { id: 5, team1: "Qatar", team2: "Thụy Sĩ", date: "2026-06-14T02:00:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 21, draw: 24, win2: 55, hasEnded: false },
    { id: 6, team1: "Brazil", team2: "Morocco", date: "2026-06-14T05:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 62, draw: 22, win2: 16, hasEnded: false },
    { id: 7, team1: "Haiti", team2: "Scotland", date: "2026-06-14T08:00:00", stadium: "Hard Rock Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 15, draw: 25, win2: 60, hasEnded: false },
    { id: 8, team1: "Australia", team2: "Thổ Nhĩ Kỳ", date: "2026-06-14T11:00:00", stadium: "NRG Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 35, draw: 29, win2: 36, hasEnded: false },
    { id: 9, team1: "Đức", team2: "Curaçao", date: "2026-06-15T00:00:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 82, draw: 12, win2: 6, hasEnded: false },
    { id: 10, team1: "Hà Lan", team2: "Nhật Bản", date: "2026-06-15T03:00:00", stadium: "Lincoln Financial Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 48, draw: 27, win2: 25, hasEnded: false },
    { id: 11, team1: "Bờ Biển Ngà", team2: "Ecuador", date: "2026-06-15T06:00:00", stadium: "Levi's Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 34, draw: 31, win2: 35, hasEnded: false },
    { id: 12, team1: "Thụy Điển", team2: "Tunisia", date: "2026-06-15T09:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 54, draw: 26, win2: 20, hasEnded: false },
    { id: 13, team1: "Tây Ban Nha", team2: "Cape Verde", date: "2026-06-15T23:00:00", stadium: "Arrowhead Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 78, draw: 15, win2: 7, hasEnded: false },
    { id: 14, team1: "Bỉ", team2: "Ai Cập", date: "2026-06-16T02:00:00", stadium: "AT&T Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng H", win1: 58, draw: 24, win2: 18, hasEnded: false },
    { id: 15, team1: "Saudi Arabia", team2: "Uruguay", date: "2026-06-16T05:00:00", stadium: "Lumen Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 18, draw: 25, win2: 57, hasEnded: false },
    { id: 16, team1: "Iran", team2: "New Zealand", date: "2026-06-16T08:00:00", stadium: "Sân vận động BBVA", location: "Mexico", round: "Vòng bảng", group: "Bảng H", win1: 50, draw: 28, win2: 22, hasEnded: false },
    { id: 17, team1: "Pháp", team2: "Senegal", date: "2026-06-17T02:00:00", stadium: "Sân vận động BBVA", location: "Mexico", round: "Vòng bảng", group: "Bảng I", win1: 68, draw: 20, win2: 12, hasEnded: false },
    { id: 18, team1: "Iraq", team2: "Na Uy", date: "2026-06-17T05:00:00", stadium: "Sân vận động SoFi", location: "Mỹ", round: "Vòng bảng", group: "Bảng I", win1: 22, draw: 25, win2: 53, hasEnded: false },
    { id: 19, team1: "Argentina", team2: "Algeria", date: "2026-06-17T08:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 74, draw: 17, win2: 9, hasEnded: false },
    { id: 20, team1: "Áo", team2: "Jordan", date: "2026-06-17T11:00:00", stadium: "Hard Rock Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 61, draw: 24, win2: 15, hasEnded: false },
    { id: 21, team1: "Bồ Đào Nha", team2: "CHDC Congo", date: "2026-06-18T00:00:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng K", win1: 76, draw: 16, win2: 8, hasEnded: false },
    { id: 22, team1: "Anh", team2: "Croatia", date: "2026-06-18T03:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng L", win1: 46, draw: 31, win2: 23, hasEnded: false },
    { id: 23, team1: "Ghana", team2: "Panama", date: "2026-06-18T06:00:00", stadium: "NRG Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng L", win1: 44, draw: 30, win2: 26, hasEnded: false },
    { id: 24, team1: "Uzbekistan", team2: "Colombia", date: "2026-06-18T09:00:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng K", win1: 20, draw: 26, win2: 54, hasEnded: false },
    { id: 25, team1: "CH Czech", team2: "Nam Phi", date: "2026-06-18T23:00:00", stadium: "Sân vận động Azteca", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 48, draw: 29, win2: 23, hasEnded: false },
    { id: 26, team1: "Thụy Sĩ", team2: "Bosnia & Herz.", date: "2026-06-19T02:00:00", stadium: "BMO Field", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 55, draw: 27, win2: 18, hasEnded: false },
    { id: 27, team1: "Canada", team2: "Qatar", date: "2026-06-19T05:00:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 60, draw: 24, win2: 16, hasEnded: false },
    { id: 28, team1: "Mexico", team2: "Hàn Quốc", date: "2026-06-19T08:00:00", stadium: "Sân vận động Quốc gia", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 47, draw: 29, win2: 24, hasEnded: false },
    { id: 29, team1: "Mỹ", team2: "Australia", date: "2026-06-20T02:00:00", stadium: "Sân vận động SoFi", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 53, draw: 27, win2: 20, hasEnded: false },
    { id: 30, team1: "Scotland", team2: "Morocco", date: "2026-06-20T05:00:00", stadium: "Lincoln Financial Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 28, draw: 29, win2: 43, hasEnded: false },
    { id: 31, team1: "Brazil", team2: "Haiti", date: "2026-06-20T07:30:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 88, draw: 9, win2: 3, hasEnded: false },
    { id: 32, team1: "Thổ Nhĩ Kỳ", team2: "Paraguay", date: "2026-06-20T10:00:00", stadium: "Arrowhead Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 40, draw: 31, win2: 29, hasEnded: false },
    { id: 33, team1: "Hà Lan", team2: "Thụy Điển", date: "2026-06-21T00:00:00", stadium: "Lincoln Financial Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 49, draw: 28, win2: 23, hasEnded: false },
    { id: 34, team1: "Đức", team2: "Bờ Biển Ngà", date: "2026-06-21T03:00:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 66, draw: 21, win2: 13, hasEnded: false },
    { id: 35, team1: "Ecuador", team2: "Đức", date: "2026-06-21T07:00:00", stadium: "Levi's Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 58, draw: 25, win2: 17, hasEnded: false },
    { id: 36, team1: "Tunisia", team2: "Nhật Bản", date: "2026-06-21T11:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 24, draw: 28, win2: 48, hasEnded: false },
    { id: 37, team1: "Tây Ban Nha", team2: "Saudi Arabia", date: "2026-06-21T23:00:00", stadium: "Arrowhead Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 70, draw: 20, win2: 10, hasEnded: false },
    { id: 38, team1: "Bỉ", team2: "Iran", date: "2026-06-22T02:00:00", stadium: "AT&T Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng H", win1: 61, draw: 23, win2: 16, hasEnded: false },
    { id: 39, team1: "Uruguay", team2: "Cape Verde", date: "2026-06-22T05:00:00", stadium: "Lumen Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 67, draw: 22, win2: 11, hasEnded: false },
    { id: 40, team1: "New Zealand", team2: "Ai Cập", date: "2026-06-22T08:00:00", stadium: "Sân vận động BBVA", location: "Mexico", round: "Vòng bảng", group: "Bảng H", win1: 20, draw: 26, win2: 54, hasEnded: false },
    { id: 41, team1: "Argentina", team2: "Áo", date: "2026-06-23T00:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 65, draw: 22, win2: 13, hasEnded: false },
    { id: 42, team1: "Pháp", team2: "Iraq", date: "2026-06-23T04:00:00", stadium: "Sân vận động Akron", location: "Mexico", round: "Vòng bảng", group: "Bảng I", win1: 80, draw: 14, win2: 6, hasEnded: false },
    { id: 43, team1: "Na Uy", team2: "Senegal", date: "2026-06-23T07:00:00", stadium: "Sân vận động SoFi", location: "Mỹ", round: "Vòng bảng", group: "Bảng I", win1: 42, draw: 30, win2: 28, hasEnded: false },
    { id: 44, team1: "Jordan", team2: "Algeria", date: "2026-06-23T10:00:00", stadium: "Hard Rock Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 18, draw: 27, win2: 55, hasEnded: false },
    { id: 45, team1: "Bồ Đào Nha", team2: "Uzbekistan", date: "2026-06-24T00:00:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng K", win1: 72, draw: 18, win2: 10, hasEnded: false },
    { id: 46, team1: "Anh", team2: "Ghana", date: "2026-06-24T03:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng L", win1: 63, draw: 23, win2: 14, hasEnded: false },
    { id: 47, team1: "Panama", team2: "Croatia", date: "2026-06-24T06:00:00", stadium: "NRG Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng L", win1: 19, draw: 26, win2: 55, hasEnded: false },
    { id: 48, team1: "Colombia", team2: "CHDC Congo", date: "2026-06-24T09:00:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng K", win1: 64, draw: 23, win2: 13, hasEnded: false },
    { id: 49, team1: "Thụy Sĩ", team2: "Canada", date: "2026-06-25T02:00:00", stadium: "BMO Field", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 39, draw: 30, win2: 31, hasEnded: false },
    { id: 50, team1: "Bosnia & Herz.", team2: "Qatar", date: "2026-06-25T02:00:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng B", win1: 46, draw: 29, win2: 25, hasEnded: false },
    { id: 51, team1: "Morocco", team2: "Haiti", date: "2026-06-25T05:00:00", stadium: "Lincoln Financial Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 68, draw: 21, win2: 11, hasEnded: false },
    { id: 52, team1: "Scotland", team2: "Brazil", date: "2026-06-25T05:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng D", win1: 12, draw: 20, win2: 68, hasEnded: false },
    { id: 53, team1: "CH Czech", team2: "Mexico", date: "2026-06-25T08:00:00", stadium: "Sân vận động Azteca", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 30, draw: 29, win2: 41, hasEnded: false },
    { id: 54, team1: "Nam Phi", team2: "Hàn Quốc", date: "2026-06-25T08:00:00", stadium: "Sân vận động Quốc gia", location: "Mexico", round: "Vòng bảng", group: "Bảng A", win1: 22, draw: 28, win2: 50, hasEnded: false },
    { id: 55, team1: "Ecuador", team2: "Đức", date: "2026-06-26T03:00:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 18, draw: 24, win2: 58, hasEnded: false },
    { id: 56, team1: "Curaçao", team2: "Bờ Biển Ngà", date: "2026-06-26T03:00:00", stadium: "Levi's Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng E", win1: 10, draw: 22, win2: 68, hasEnded: false },
    { id: 57, team1: "Nhật Bản", team2: "Thụy Điển", date: "2026-06-26T06:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 38, draw: 29, win2: 33, hasEnded: false },
    { id: 58, team1: "Tunisia", team2: "Hà Lan", date: "2026-06-26T06:00:00", stadium: "Lincoln Financial Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng F", win1: 14, draw: 22, win2: 64, hasEnded: false },
    { id: 59, team1: "Thổ Nhĩ Kỳ", team2: "Mỹ", date: "2026-06-26T09:00:00", stadium: "Sân vận động SoFi", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 26, draw: 28, win2: 46, hasEnded: false },
    { id: 60, team1: "Paraguay", team2: "Australia", date: "2026-06-26T09:00:00", stadium: "NRG Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng C", win1: 30, draw: 31, win2: 39, hasEnded: false },
    { id: 61, team1: "Senegal", team2: "Iraq", date: "2026-06-27T02:00:00", stadium: "Sân vận động Akron", location: "Mexico", round: "Vòng bảng", group: "Bảng I", win1: 52, draw: 28, win2: 20, hasEnded: false },
    { id: 62, team1: "Na Uy", team2: "Pháp", date: "2026-06-27T02:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng I", win1: 15, delay: 22, win2: 63, hasEnded: false },
    { id: 63, team1: "Uruguay", team2: "Tây Ban Nha", date: "2026-06-27T07:00:00", stadium: "Arrowhead Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 26, draw: 30, win2: 44, hasEnded: false },
    { id: 64, team1: "Cape Verde", team2: "Saudi Arabia", date: "2026-06-27T07:00:00", stadium: "Lumen Field", location: "Mỹ", round: "Vòng bảng", group: "Bảng G", win1: 33, draw: 31, win2: 36, hasEnded: false },
    { id: 65, team1: "Ai Cập", team2: "Iran", date: "2026-06-27T10:00:00", stadium: "Sân vận động BBVA", location: "Mexico", round: "Vòng bảng", group: "Bảng H", win1: 38, draw: 32, win2: 30, hasEnded: false },
    { id: 66, team1: "New Zealand", team2: "Bỉ", date: "2026-06-27T10:00:00", stadium: "AT&T Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng H", win1: 8, draw: 16, win2: 76, hasEnded: false },
    { id: 67, team1: "Croatia", team2: "Ghana", date: "2026-06-28T04:00:00", stadium: "NRG Stadium", location: "Mỹ", round: "Vòng bảng", group: "BQL L", win1: 50, draw: 29, win2: 21, hasEnded: false },
    { id: 68, team1: "Panama", team2: "Anh", date: "2026-06-28T04:00:00", stadium: "Gillette Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng L", win1: 9, draw: 18, win2: 73, hasEnded: false },
    { id: 69, team1: "Colombia", team2: "Bồ Đào Nha", date: "2026-06-28T06:30:00", stadium: "BC Place", location: "Canada", round: "Vòng bảng", group: "Bảng K", win1: 25, draw: 28, win2: 47, hasEnded: false },
    { id: 70, team1: "CHDC Congo", team2: "Uzbekistan", date: "2026-06-28T06:30:00", stadium: "Mercedes-Benz Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng K", win1: 32, draw: 31, win2: 37, hasEnded: false },
    { id: 71, team1: "Algeria", team2: "Áo", date: "2026-06-28T09:00:00", stadium: "Hard Rock Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 23, draw: 27, win2: 50, hasEnded: false },
    { id: 72, team1: "Jordan", team2: "Argentina", date: "2026-06-28T09:00:00", stadium: "MetLife Stadium", location: "Mỹ", round: "Vòng bảng", group: "Bảng J", win1: 5, draw: 12, win2: 83, hasEnded: false }
];

// Định nghĩa DOM
const matchContainer = document.getElementById('match-container');
const searchInput = document.getElementById('searchInput');
const roundFilter = document.getElementById('roundFilter');
const dateFilter = document.getElementById('dateFilter');

const matchModal = document.getElementById('matchModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// 1. Hàm vẽ danh sách trận đấu ra màn hình (Có bổ sung cờ nước tự động)
function renderMatches(matchesToRender) {
    matchContainer.innerHTML = '';

    if (matchesToRender.length === 0) {
        matchContainer.innerHTML = '<p style="text-align:center; width:100%; color:#888; padding: 30px; font-size:1.1rem;">🔍 Không tìm thấy trận đấu nào phù hợp!</p>';
        return;
    }

    matchesToRender.forEach(match => {
        const matchDate = new Date(match.date);
        const formattedDate = matchDate.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
        const formattedTime = matchDate.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.setAttribute('data-id', match.id);

        // Tạo chuỗi tỉ số nếu trận đấu đã kết thúc
        const vsDisplay = match.hasEnded ? `${match.score1} - ${match.score2}` : "VS";

        matchCard.innerHTML = `
            <div class="match-date">
                <span><i class="far fa-calendar-alt"></i> Ngày ${formattedDate} - ${formattedTime}</span>
                <span class="group-tag" style="background:#0d3b66; color:white; padding:2px 8px; border-radius:4px; font-size:0.8rem;">${match.group}</span>
            </div>
            <div class="teams">
                <span class="team-name">${match.team1} <img class="flag" src="${getFlagUrl(match.team1)}" alt="${match.team1}"></span>
                <span class="vs">${vsDisplay}</span>
                <span class="team-name"><img class="flag" src="${getFlagUrl(match.team2)}" alt="${match.team2}"> ${match.team2}</span>
            </div>
            
            <div class="prediction-box">
                <div class="predict-title">
                    <span>Thắng: ${match.win1}%</span>
                    <span>Hòa: ${match.draw}%</span>
                    <span>Thắng: ${match.win2}%</span>
                </div>
                <div class="predict-bar">
                    <div class="bar-team1" style="width: ${match.win1}%"></div>
                    <div class="bar-draw" style="width: ${match.draw}%"></div>
                    <div class="bar-team2" style="width: ${match.win2}%"></div>
                </div>
            </div>

            <div class="match-info">
                <span><i class="fas fa-map-marker-alt"></i> Sân: ${match.stadium}</span>
                <span><i class="fas fa-globe-americas"></i> Quốc gia: ${match.location}</span>
            </div>
        `;
        matchContainer.appendChild(matchCard);
    });
}

// 2. Logic xử lý Modal Popup khi Click vào Trận đấu (Tự nhận diện Đã đá / Chưa đá)
function openMatchDetails(matchId) {
    const match = matchesData.find(m => m.id === parseInt(matchId));
    if (!match) return;

    // TRƯỜNG HỢP 1: TRẬN ĐẤU ĐÃ KẾT THÚC (HIỂN THỊ ĐỦ THÔNG SỐ VÀ ĐỘI HÌNH)
    if (match.hasEnded) {
        let lineupHtml1 = match.lineups.team1.map(p => `<div class="player-name">${p}</div>`).join('');
        let lineupHtml2 = match.lineups.team2.map(p => `<div class="player-name">${p}</div>`).join('');

        modalBody.innerHTML = `
            <div class="modal-header-teams">
                <span>${match.team1} <img class="flag" src="${getFlagUrl(match.team1)}"></span>
                <span class="modal-score">${match.score1} - ${match.score2}</span>
                <span><img class="flag" src="${getFlagUrl(match.team2)}"> ${match.team2}</span>
            </div>
            
            <div class="modal-scorers">
                <div style="width: 45%; text-align: left;">${match.scorers1 || ''}</div>
                <div style="width: 10%; text-align: center;"><i class="fas fa-soccer-ball"></i></div>
                <div style="width: 45%; text-align: right;">${match.scorers2 || ''}</div>
            </div>

            <div class="section-title">Thống kê trận đấu</div>
            <div class="stats-container">
                ${renderStatRow("Kiểm soát bóng", match.stats.possession1, match.stats.possession2, "%")}
                ${renderStatRow("Tổng cú sút", match.stats.shots1, match.stats.shots2)}
                ${renderStatRow("Sút trúng đích", match.stats.shotsOnTarget1, match.stats.shotsOnTarget2)}
                ${renderStatRow("Phạt góc", match.stats.corners1, match.stats.corners2)}
            </div>

            <div class="section-title">Đội hình ra sân</div>
            <div class="lineup-box">
                <div class="lineup-col">
                    <h4>${match.team1}</h4>
                    ${lineupHtml1}
                </div>
                <div class="lineup-col">
                    <h4>${match.team2}</h4>
                    ${lineupHtml2}
                </div>
            </div>
        `;
    } 
    // TRƯỜNG HỢP 2: TRẬN ĐẤU CHƯA DIỄN RA
    else {
        modalBody.innerHTML = `
            <div class="modal-header-teams">
                <span>${match.team1} <img class="flag" src="${getFlagUrl(match.team1)}"></span>
                <span style="color:#e71d36; font-size:1.2rem; margin: 0 15px;">VS</span>
                <span><img class="flag" src="${getFlagUrl(match.team2)}"> ${match.team2}</span>
            </div>
            <div class="no-data-msg">
                <i class="fas fa-hourglass-start" style="font-size: 2.5rem; margin-bottom: 15px; color: #888;"></i>
                <br>
                <strong style="font-size: 1.1rem;">Trận đấu chưa diễn ra</strong>
                <p style="font-size: 0.95rem; margin-top: 15px; line-height: 1.5; color:#666;">
                    Đội hình ra sân chính thức, người ghi bàn, và các thông số kỹ thuật (kiểm soát bóng, cú sút, phạt góc...) sẽ được hệ thống cập nhật ngay khi trận đấu bắt đầu.
                </p>
            </div>
        `;
    }

    matchModal.style.display = 'flex';
}

// Hàm bổ trợ vẽ thanh phần trăm thông số so sánh 2 đội
function renderStatRow(label, val1, val2, unit = "") {
    const total = val1 + val2;
    const pct1 = total > 0 ? (val1 / total) * 100 : 50;
    const pct2 = total > 0 ? (val2 / total) * 100 : 50;
    return `
        <div class="stat-row">
            <div class="stat-info">
                <span>${val1}${unit}</span>
                <span style="color:#777; font-weight:normal;">${label}</span>
                <span>${val2}${unit}</span>
            </div>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill1" style="width: ${pct1}%"></div>
                <div class="stat-bar-fill2" style="width: ${pct2}%"></div>
            </div>
        </div>
    `;
}

// Bắt sự kiện Click thẻ
matchContainer.addEventListener('click', function(e) {
    const clickedCard = e.target.closest('.match-card');
    if (clickedCard) {
        const matchId = clickedCard.getAttribute('data-id');
        openMatchDetails(matchId);
    }
});

closeBtn.onclick = function() { matchModal.style.display = "none"; }
window.onclick = function(event) { if (event.target === matchModal) { matchModal.style.display = "none"; } }

// 3. Hàm xử lý tìm kiếm và bộ lọc
function filterMatches() {
    const searchText = searchInput.value.toLowerCase();
    const selectedRound = roundFilter.value;
    const selectedDate = dateFilter.value; 

    const filtered = matchesData.filter(match => {
        const matchTeams = (match.team1 + " " + match.team2).toLowerCase();
        const isSearchMatch = matchTeams.includes(searchText);
        const isRoundMatch = selectedRound === 'all' || match.round === selectedRound;

        let isDateMatch = true;
        if (selectedDate) {
            const matchDateOnly = match.date.split('T')[0];
            isDateMatch = matchDateOnly === selectedDate;
        }

        return isSearchMatch && isRoundMatch && isDateMatch;
    });

    renderMatches(filtered);
}

searchInput.addEventListener('input', filterMatches);
roundFilter.addEventListener('change', filterMatches);
dateFilter.addEventListener('change', filterMatches);

// 4. Hàm đếm ngược
function startCountdown() {
    const targetMatchDate = new Date('2026-06-12T02:00:00').getTime();
    const countdownElement = document.getElementById('countdown');

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetMatchDate - now;

        if (distance < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = "<div style='font-size: 1.4rem; color: #fff; font-weight:bold;'>🔥 GIẢI ĐẤU ĐÃ CHÍNH THỨC KHỞI TRANH! 🔥</div>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="time-box">${days} <span>Ngày</span></div>:
            <div class="time-box">${hours} <span>Giờ</span></div>:
            <div class="time-box">${minutes} <span>Phút</span></div>:
            <div class="time-box">${seconds} <span>Giây</span></div>
        `;
    }, 1000);
}

// 5. LƯU THEME DARK MODE
const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Chế độ sáng';
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Chế độ sáng';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Chế độ tối';
        localStorage.setItem('theme', 'light');
    }
});

// Khởi chạy ứng dụng
renderMatches(matchesData);
startCountdown();