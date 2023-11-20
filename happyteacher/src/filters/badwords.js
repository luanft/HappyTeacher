const BAD_WORDS = {
    'buồi': 'hihihi',
    'buoi': 'hihihi',
    'dau buoi': 'hihihi',
    'daubuoi': 'hihihi',
    'caidaubuoi': 'hihihi',
    'nhucaidaubuoi': 'hihihi',
    'dau boi': 'hihihi',
    'bòi': 'hihihi',
    'dauboi': 'hihihi',
    'caidauboi': 'hihihi',
    'đầu bòy': 'hihihi',
    'đầu bùi': 'hihihi',
    'dau boy': 'hihihi',
    'dauboy': 'hihihi',
    'caidauboy': 'hihihi',
    'b`': 'hihihi',
    'cặc': 'hihihi',
    'cak': 'hihihi',
    'kak': 'hihihi',
    'kac': 'hihihi',
    'cac': 'hihihi',
    'concak': 'hihihi',
    'nungcak': 'hihihi',
    'bucak': 'hihihi',
    'caiconcac': 'hihihi',
    'caiconcak': 'hihihi',
    'cu': 'hihihi',
    'cặk': 'hihihi',
    'cak': 'hihihi',
    'dái': 'hihihi',
    'giái': 'hihihi',
    'zái': 'hihihi',
    'kiu': 'hihihi',
    'cứt': 'hihihi',
    'cuccut': 'hihihi',
    'cutcut': 'hihihi',
    'cứk': 'hihihi',
    'cuk': 'hihihi',
    'cười ỉa': 'hihihi',
    'cười ẻ': 'hihihi',
    'đéo': 'hihihi',
    'đếch': 'hihihi',
    'đếk': 'hihihi',
    'dek': 'hihihi',
    'đết': 'hihihi',
    'đệt': 'hihihi',
    'đách': 'hihihi',
    'dech': 'hihihi',
    'đ': 'hihihi',
    'deo': 'hihihi',
    'd': 'hihihi',
    'đel': 'hihihi',
    'đél': 'hihihi',
    'del': 'hihihi',
    'dell ngửi': 'hihihi',
    'dell ngui': 'hihihi',
    'dell chịu': 'hihihi',
    'dell chiu': 'hihihi',
    'dell hiểu': 'hihihi',
    'dell hieu': 'hihihi',
    'dellhieukieugi': 'hihihi',
    'dell nói': 'hihihi',
    'dell noi': 'hihihi',
    'dellnoinhieu': 'hihihi',
    'dell biết': 'hihihi',
    'dell biet': 'hihihi',
    'dell nghe': 'hihihi',
    'dell ăn': 'hihihi',
    'dell an': 'hihihi',
    'dell được': 'hihihi',
    'dell duoc': 'hihihi',
    'dell làm': 'hihihi',
    'dell lam': 'hihihi',
    'dell đi': 'hihihi',
    'dell di': 'hihihi',
    'dell chạy': 'hihihi',
    'dell chay': 'hihihi',
    'deohieukieugi': 'hihihi',
    'địt': 'hihihi',
    'đm': 'hihihi',
    'dm': 'hihihi',
    'đmm': 'hihihi',
    'dmm': 'hihihi',
    'đmmm': 'hihihi',
    'dmmm': 'hihihi',
    'đmmmm': 'hihihi',
    'dmmmm': 'hihihi',
    'đmmmmm': 'hihihi',
    'dmmmmm': 'hihihi',
    'đcm': 'hihihi',
    'dcm': 'hihihi',
    'đcmm': 'hihihi',
    'dcmm': 'hihihi',
    'đcmmm': 'hihihi',
    'dcmmm': 'hihihi',
    'đcmmmm': 'hihihi',
    'dcmmmm': 'hihihi',
    'đệch': 'hihihi',
    'đệt': 'hihihi',
    'dit': 'hihihi',
    'dis': 'hihihi',
    'diz': 'hihihi',
    'đjt': 'hihihi',
    'djt': 'hihihi',
    'địt mẹ': 'hihihi',
    'địt mịe': 'hihihi',
    'địt má': 'hihihi',
    'địt mía': 'hihihi',
    'địt ba': 'hihihi',
    'địt bà': 'hihihi',
    'địt cha': 'hihihi',
    'địt con': 'hihihi',
    'địt bố': 'hihihi',
    'địt cụ': 'hihihi',
    'dis me': 'hihihi',
    'disme': 'hihihi',
    'dismje': 'hihihi',
    'dismia': 'hihihi',
    'dis mia': 'hihihi',
    'dis mie': 'hihihi',
    'đis mịa': 'hihihi',
    'đis mịe': 'hihihi',
    'ditmemayconcho': 'hihihi',
    'ditmemay': 'hihihi',
    'ditmethangoccho': 'hihihi',
    'ditmeconcho': 'hihihi',
    'dmconcho': 'hihihi',
    'dmcs': 'hihihi',
    'ditmecondi': 'hihihi',
    'ditmecondicho': 'hihihi',
    'đụ': 'hihihi',
    'đụ mẹ': 'hihihi',
    'đụ mịa': 'hihihi',
    'đụ mịe': 'hihihi',
    'đụ má': 'hihihi',
    'đụ cha': 'hihihi',
    'đụ bà': 'hihihi',
    'đú cha': 'hihihi',
    'đú con mẹ': 'hihihi',
    'đú má': 'hihihi',
    'đú mẹ': 'hihihi',
    'đù cha': 'hihihi',
    'đù má': 'hihihi',
    'đù mẹ': 'hihihi',
    'đù mịe': 'hihihi',
    'đù mịa': 'hihihi',
    'đủ cha': 'hihihi',
    'đủ má': 'hihihi',
    'đủ mẹ': 'hihihi',
    'đủ mé': 'hihihi',
    'đủ mía': 'hihihi',
    'đủ mịa': 'hihihi',
    'đủ mịe': 'hihihi',
    'đủ mie': 'hihihi',
    'đủ mia': 'hihihi',
    'đìu': 'hihihi',
    'đờ mờ': 'hihihi',
    'đê mờ': 'hihihi',
    'đờ ma ma': 'hihihi',
    'đờ mama': 'hihihi',
    'đê mama': 'hihihi',
    'đề mama': 'hihihi',
    'đê ma ma': 'hihihi',
    'đề ma ma': 'hihihi',
    'dou': 'hihihi',
    'doma': 'hihihi',
    'duoma': 'hihihi',
    'dou má': 'hihihi',
    'duo má': 'hihihi',
    'dou ma': 'hihihi',
    'đou má': 'hihihi',
    'đìu má': 'hihihi',
    'á đù': 'hihihi',
    'á đìu': 'hihihi',
    'đậu mẹ': 'hihihi',
    'đậu má': 'hihihi',
    'đĩ': 'hihihi',
    'di~': 'hihihi',
    'đuỹ': 'hihihi',
    'điếm': 'hihihi',
    'cđĩ': 'hihihi',
    'cdi~': 'hihihi',
    'đilol': 'hihihi',
    'điloz': 'hihihi',
    'đilon': 'hihihi',
    'diloz': 'hihihi',
    'dilol': 'hihihi',
    'dilon': 'hihihi',
    'condi': 'hihihi',
    'condi~': 'hihihi',
    'dime': 'hihihi',
    'di me': 'hihihi',
    'dimemay': 'hihihi',
    'condime': 'hihihi',
    'condimay': 'hihihi',
    'condimemay': 'hihihi',
    'con di cho': 'hihihi',
    'con di cho': 'hihihi',
    'condicho': 'hihihi',
    'bitch': 'hihihi',
    'biz': 'hihihi',
    'bít chi': 'hihihi',
    'con bích': 'hihihi',
    'con bic': 'hihihi',
    'con bíc': 'hihihi',
    'con bít': 'hihihi',
    'phò': 'hihihi',
    '4`': 'hihihi',
    'lồn': 'hihihi',
    'l`': 'hihihi',
    'loz': 'hihihi',
    'lìn': 'hihihi',
    'nulo': 'hihihi',
    'ml': 'hihihi',
    'matlon': 'hihihi',
    'cailon': 'hihihi',
    'matlol': 'hihihi',
    'matloz': 'hihihi',
    'thml': 'hihihi',
    'thangmatlon': 'hihihi',
    'thangml': 'hihihi',
    'đỗn lì': 'hihihi',
    'tml': 'hihihi',
    'thml': 'hihihi',
    'diml': 'hihihi',
    'dml': 'hihihi',
    'hãm': 'hihihi',
    'xàm lol': 'hihihi',
    'xam lol': 'hihihi',
    'xạo lol': 'hihihi',
    'xao lol': 'hihihi',
    'con lol': 'hihihi',
    'ăn lol': 'hihihi',
    'an lol': 'hihihi',
    'mát lol': 'hihihi',
    'mat lol': 'hihihi',
    'cái lol': 'hihihi',
    'cai lol': 'hihihi',
    'lòi lol': 'hihihi',
    'loi lol': 'hihihi',
    'ham lol': 'hihihi',
    'củ lol': 'hihihi',
    'cu lol': 'hihihi',
    'ngu lol': 'hihihi',
    'tuổi lol': 'hihihi',
    'tuoi lol': 'hihihi',
    'mõm lol': 'hihihi',
    'mồm lol': 'hihihi',
    'mom lol': 'hihihi',
    'như lol': 'hihihi',
    'nhu lol': 'hihihi',
    'nứng lol': 'hihihi',
    'nung lol': 'hihihi',
    'nug lol': 'hihihi',
    'nuglol': 'hihihi',
    'rảnh lol': 'hihihi',
    'ranh lol': 'hihihi',
    'đách lol': 'hihihi',
    'dach lol': 'hihihi',
    'mu lol': 'hihihi',
    'banh lol': 'hihihi',
    'tét lol': 'hihihi',
    'tet lol': 'hihihi',
    'vạch lol': 'hihihi',
    'vach lol': 'hihihi',
    'cào lol': 'hihihi',
    'cao lol': 'hihihi',
    'tung lol': 'hihihi',
    'mặt lol': 'hihihi',
    'mát lol': 'hihihi',
    'mat lol': 'hihihi',
    'xàm lon': 'hihihi',
    'xam lon': 'hihihi',
    'xạo lon': 'hihihi',
    'xao lon': 'hihihi',
    'con lon': 'hihihi',
    'ăn lon': 'hihihi',
    'an lon': 'hihihi',
    'mát lon': 'hihihi',
    'mat lon': 'hihihi',
    'cái lon': 'hihihi',
    'cai lon': 'hihihi',
    'lòi lon': 'hihihi',
    'loi lon': 'hihihi',
    'ham lon': 'hihihi',
    'củ lon': 'hihihi',
    'cu lon': 'hihihi',
    'ngu lon': 'hihihi',
    'tuổi lon': 'hihihi',
    'tuoi lon': 'hihihi',
    'mõm lon': 'hihihi',
    'mồm lon': 'hihihi',
    'mom lon': 'hihihi',
    'như lon': 'hihihi',
    'nhu lon': 'hihihi',
    'nứng lon': 'hihihi',
    'nung lon': 'hihihi',
    'nug lon': 'hihihi',
    'nuglon': 'hihihi',
    'rảnh lon': 'hihihi',
    'ranh lon': 'hihihi',
    'đách lon': 'hihihi',
    'dach lon': 'hihihi',
    'mu lon': 'hihihi',
    'banh lon': 'hihihi',
    'tét lon': 'hihihi',
    'tet lon': 'hihihi',
    'vạch lon': 'hihihi',
    'vach lon': 'hihihi',
    'cào lon': 'hihihi',
    'cao lon': 'hihihi',
    'tung lon': 'hihihi',
    'mặt lon': 'hihihi',
    'mát lon': 'hihihi',
    'mat lon': 'hihihi',
    'cái lờ': 'hihihi',
    'cl': 'hihihi',
    'clgt': 'hihihi',
    'cờ lờ gờ tờ': 'hihihi',
    'cái lề gì thốn': 'hihihi',
    'đốn cửa lòng': 'hihihi',
    'sml': 'hihihi',
    'sapmatlol': 'hihihi',
    'sapmatlon': 'hihihi',
    'sapmatloz': 'hihihi',
    'sấp mặt': 'hihihi',
    'sap mat': 'hihihi',
    'vlon': 'hihihi',
    'vloz': 'hihihi',
    'vlol': 'hihihi',
    'vailon': 'hihihi',
    'vai lon': 'hihihi',
    'vai lol': 'hihihi',
    'vailol': 'hihihi',
    'nốn lừng': 'hihihi',
    'vcl': 'hihihi',
    'vl': 'hihihi',
    'vleu': 'hihihi',
    'chịch': 'hihihi',
    'chich': 'hihihi',
    'vãi': 'hihihi',
    'v~': 'hihihi',
    'đụ': 'hihihi',
    'nứng': 'hihihi',
    'nug': 'hihihi',
    'đút đít': 'hihihi',
    'chổng mông': 'hihihi',
    'banh háng': 'hihihi',
    'xéo háng': 'hihihi',
    'xhct': 'hihihi',
    'xephinh': 'hihihi',
    'la liếm': 'hihihi',
    'đổ vỏ': 'hihihi',
    'xoạc': 'hihihi',
    'xoac': 'hihihi',
    'chich choac': 'hihihi',
    'húp sò': 'hihihi',
    'fuck': 'hihihi',
    'fck': 'hihihi',
    'đụ': 'hihihi',
    'bỏ bú': 'hihihi',
    'buscu': 'hihihi',
    'ngu': 'hihihi',
    'óc chó': 'hihihi',
    'occho': 'hihihi',
    'lao cho': 'hihihi',
    'láo chó': 'hihihi',
    'bố láo': 'hihihi',
    'chó má': 'hihihi',
    'cờ hó': 'hihihi',
    'sảng': 'hihihi',
    'thằng chó': 'hihihi',
    'thang cho': 'hihihi',
    'thang cho': 'hihihi',
    'chó điên': 'hihihi',
    'thằng điên': 'hihihi',
    'thang dien': 'hihihi',
    'đồ điên': 'hihihi',
    'sủa bậy': 'hihihi',
    'sủa tiếp': 'hihihi',
    'sủa đi': 'hihihi',
    'sủa càn': 'hihihi',
    'mẹ bà': 'hihihi',
    'mẹ cha mày': 'hihihi',
    'me cha may': 'hihihi',
    'mẹ cha anh': 'hihihi',
    'mẹ cha nhà anh': 'hihihi',
    'mẹ cha nhà mày': 'hihihi',
    'me cha nha may': 'hihihi',
    'mả cha mày': 'hihihi',
    'mả cha nhà mày': 'hihihi',
    'ma cha may': 'hihihi',
    'ma cha nha may': 'hihihi',
    'mả mẹ': 'hihihi',
    'mả cha': 'hihihi',
    'kệ mẹ': 'hihihi',
    'kệ mịe': 'hihihi',
    'kệ mịa': 'hihihi',
    'kệ mje': 'hihihi',
    'kệ mja': 'hihihi',
    'ke me': 'hihihi',
    'ke mie': 'hihihi',
    'ke mia': 'hihihi',
    'ke mja': 'hihihi',
    'ke mje': 'hihihi',
    'bỏ mẹ': 'hihihi',
    'bỏ mịa': 'hihihi',
    'bỏ mịe': 'hihihi',
    'bỏ mja': 'hihihi',
    'bỏ mje': 'hihihi',
    'bo me': 'hihihi',
    'bo mia': 'hihihi',
    'bo mie': 'hihihi',
    'bo mje': 'hihihi',
    'bo mja': 'hihihi',
    'chetme': 'hihihi',
    'chet me': 'hihihi',
    'chết mẹ': 'hihihi',
    'chết mịa': 'hihihi',
    'chết mja': 'hihihi',
    'chết mịe': 'hihihi',
    'chết mie': 'hihihi',
    'chet mia': 'hihihi',
    'chet mie': 'hihihi',
    'chet mja': 'hihihi',
    'chet mje': 'hihihi',
    'thấy mẹ': 'hihihi',
    'thấy mịe': 'hihihi',
    'thấy mịa': 'hihihi',
    'thay me': 'hihihi',
    'thay mie': 'hihihi',
    'thay mia': 'hihihi',
    'tổ cha': 'hihihi',
    'bà cha mày': 'hihihi',
    'cmn': 'hihihi',
    'cmnl': 'hihihi',
    'tiên sư nhà mày': 'hihihi',
    'tiên sư bố': 'hihihi',
    'tổ sư': 'hihihi'
};
export default BAD_WORDS;