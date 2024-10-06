const STARTER = "Cùng PGS. TS. Nguyễn Nhật Minh"

const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const isString = (target) => typeof target === 'string' || target instanceof String
const appendAll = (target, elementList) => {
    elementList.forEach((e) => {
        if (isString(e)) {
            target.innerHTML += e;
        } else if (e instanceof Array) {
            appendAll(target, e);
        } else {
            target.appendChild(e);
        }
    })
}

const create = (name, classList, child, options) => {
    let e = document.createElement(name);
    e.classList = classList !== null ? classList : "";
    if (child instanceof Array) {
        appendAll(e, child);
    } else if (isString(child)) {
        e.innerHTML = child;
    }
    if (options !== undefined) {
        Object.entries(options).forEach(([k, v]) => e[k] = v);
    }
    return e;
}

const sectioninsert = {
    ninemonths: {
        header: "Cách Học Đạt 8.0 IELTS Chỉ Sau 9 Tháng",
        content: [
            { img: "stock1.png", title: "Lập Kế Hoạch Học Tập Rõ Ràng", description: STARTER + "xác định mục tiêu, đặt mục tiêu cụ thể cho từng tháng, như hoàn thành các kỹ năng Listening, Reading, Writing và Speaking" },
            { img: "stock2.png", title: "Nâng Cao Từ Vựng và Ngữ Pháp", description: STARTER + "học từ vựng theo chủ đề: Sử dụng flashcards hoặc ứng dụng học từ vựng để ghi nhớ từ mới theo chủ đề thường gặp trong IELTS." },
            { img: "stock3.png", title: "Thực Hành Đều Đặn Các Kỹ Năng", description: STARTER + "nghe các podcast, tin tức tiếng Anh và các bài nghe mẫu trong sách IELTS." },
            { img: "stock4.png", title: "Tham Gia Khóa Học IELTS Chất Lượng", description: STARTER + "Tìm kiếm giáo viên có kinh nghiệm: Một khóa học với giáo viên giàu kinh nghiệm sẽ giúp bạn nắm rõ cấu trúc bài thi và mẹo làm bài." },
            { img: "stock5.png", title: "Sử Dụng Tài Nguyên Học Tập Hiệu Quả", description: STARTER + "sử dụng sách như \"Cambridge IELTS\" để làm quen với định dạng đề thi." },
            { img: "stock6.png", title: "Giải Đề Thực Tế", description: STARTER + "thực hành dưới áp lực thời gian: Giải các đề thi thực tế trong điều kiện giống như thi thật để nâng cao khả năng quản lý thời gian." },
            { img: "stock1.png", title: "Giữ Tinh Thần Lạc Quan", description: STARTER + "tự tin và kiên nhẫn, hành trình học IELTS sẽ có thử thách, nhưng hãy luôn giữ tinh thần tích cực và kiên nhẫn." },]
    },
    reading: {
        header: "Cách Làm Bài Reading IELTS Hiệu Quả",
        content: [
            { img: "stock5.png", title: "Hiểu Cấu Trúc Bài Thi Reading", description: STARTER + "phân loại câu hỏi: Nắm rõ các loại câu hỏi như multiple choice, true/false/not given, matching headings, và gap- fill.Mỗi loại có chiến lược làm bài riêng." },
            { img: "stock4.png", title: "Đọc Hiểu Nhanh Chóng", description: STARTER + "skimming và scanning: Sử dụng kỹ thuật skimming(đọc lướt) để nắm nội dung chính của đoạn văn và scanning(tìm kiếm) để tìm thông tin cụ thể mà câu hỏi yêu cầu." },
            { img: "stock3.png", title: "Phát Triển Từ Vựng Chuyên Ngành", description: STARTER + "học từ vựng theo chủ đề: Từ vựng trong IELTS Reading thường liên quan đến các chủ đề như môi trường, khoa học, xã hội, văn hóa.Hãy ghi chú và luyện tập từ vựng thường xuyên." },
            { img: "stock6.png", title: "Luyện Tập Thường Xuyên", description: STARTER + "giải đề IELTS thực tế, sử dụng sách như \"Cambridge IELTS\" để làm quen với định dạng đề thi.Hãy thực hành ít nhất 1-2 bài mỗi tuần." },
            { img: "stock2.png", title: "Quản Lý Thời Gian", description: STARTER + "thiết lập thời gian cho mỗi đoạn: Phân chia thời gian cho mỗi đoạn văn để đảm bảo bạn có đủ thời gian cho tất cả các câu hỏi." },
            { img: "stock1.png", title: "Tham Gia Khóa Học IELTS Chất Lượng", description: STARTER + "học từ giáo viên có kinh nghiệm: Tham gia các khóa học IELTS để nhận được sự hướng dẫn từ những người có kinh nghiệm.Họ sẽ cung cấp cho bạn mẹo làm bài hiệu quả và chiến lược học tập." },
            { img: "stock2.png", title: "Giữ Tinh Thần Tích Cực", description: STARTER + "tự tin và kiên nhẫn: Hãy nhớ rằng việc cải thiện kỹ năng Reading cần thời gian và nỗ lực.Đừng nản lòng trước những thử thách!" },
        ]
    },
    writing: {
        header: "Cách Làm Bài Writing IELTS Hiệu Quả",
        content: [
            { img: "stock4.png", title: "Hiểu Rõ Cấu Trúc Bài Thi Writing", description: STARTER + "phân loại bài viết: IELTS Writing bao gồm 2 phần: Task 1(miêu tả đồ thị, biểu đồ, hoặc quy trình) và Task 2(viết bài luận).Mỗi phần có yêu cầu và cấu trúc riêng, vì vậy hãy nắm rõ để tránh bị nhầm lẫn." },
            { img: "stock1.png", title: "Lập Dàn Ý Trước Khi Viết", description: STARTER + "tạo dàn ý chi tiết: Dành vài phút để lập dàn ý cho bài viết của bạn.Điều này giúp bạn tổ chức ý tưởng và đảm bảo rằng bài viết của bạn mạch lạc." },
            { img: "stock5.png", title: "Sử Dụng Ngôn Ngữ Đa Dạng và Chính Xác", description: STARTER + "mở rộng từ vựng: Sử dụng từ vựng phong phú và đa dạng sẽ giúp bài viết của bạn trở nên ấn tượng hơn.Hãy luyện tập sử dụng từ đồng nghĩa và cụm từ thay thế để tránh lặp từ." },
            { img: "stock2.png", title: "Phát Triển Ý Tưởng Rõ Ràng", description: STARTER + "cung cấp ví dụ cụ thể: Hãy sử dụng ví dụ thực tế hoặc dẫn chứng cụ thể để hỗ trợ cho luận điểm của bạn.Điều này không chỉ giúp bài viết của bạn thuyết phục hơn mà còn cho thấy khả năng phân tích và lập luận." },
            { img: "stock3.png", title: "Luyện Tập Thực Tế", description: STARTER + "giải đề Writing thực tế: Thực hành viết dưới áp lực thời gian là cách tốt nhất để cải thiện kỹ năng của bạn.Hãy thử viết ít nhất 2-3 bài mỗi tuần và nhờ người có kinh nghiệm chấm và góp ý." },
            { img: "stock6.png", title: "Tham Gia Khóa Học IELTS Chất Lượng", description: STARTER + "tìm kiếm giảng viên có kinh nghiệm: Tham gia khóa học IELTS với giáo viên có chuyên môn để nhận được sự hướng dẫn tận tình và bài bản." },
            { img: "stock1.png", title: "Giữ Tinh Thần Tích Cực và Kiên Nhẫn", description: STARTER + "tự tin vào bản thân: Hãy nhớ rằng cải thiện kỹ năng viết cần thời gian và sự kiên nhẫn.Đừng nản lòng trước những khó khăn ban đầu!" },
        ]
    },
}

Object.entries(sectioninsert).forEach(([id, section]) => {
    let e = document.getElementById(id);
    e.classList = "section"
    // let head = document.createElement("div")
    // head.classList = "head"
    // let headertext = document.createElement("h1");
    // headertext.innerHTML = section.header;
    // let headermore = document.createElement("a")
    // headermore.href = "";
    // headermore.innerHTML = "Xem thêm ＞";
    // head.appendChild(headertext);
    // head.appendChild(headermore)

    e.appendChild(create("div", "head", [
        create("h1", "", section.header),
        create("a", "", "Xem thêm ＞"),
    ]))

    e.appendChild(create("div", "cardlist", [
        section.content.map((card) => create("div", "card", [
            create("img", "cover", null, { src: "./assets/" + card.img }),
            create("div", "desc", [
                create("a", "title", card.title),
                create("p", "", card.description)
            ])
        ]))
    ]))






})