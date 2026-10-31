let books = [
    {
        bookCode: "BOK-001", title: "Lập Trình Căn Bản",
        author: "Nguyễn Hữu Tài",
        publishYear: 2018, quantity: 12
    },
    {
        bookCode: "BOK-002", title: "Cấu Trúc Dữ Liệu",
        author: "Trần Minh Đức",
        publishYear: 2020, quantity: 8
    },
    {
        bookCode: "BOK-003", title: "Thiết Kế Web Hiện Đại",
        author: "Nguyễn Hữu Tài",
        publishYear: 2023, quantity: 15
    }

];


let choice = ""
const line = "=".repeat(60);


function validateBookCode(code) {
    strCode = String(code).trim().toUpperCase;

    if (strCode === "") {
        return "Bạn chưa nhập gì cả";
    } if (strCode.length < 6) {
        return "Mã tối thiểu 6 ký tự";
    } else if (strCode.startsWith("BOK-")) {
        return "Phải bắt đầu bằng BOK-";
    } else if (strCode.inclues(" ")) {
        return "Không được có khoảng trắng";
    } else {
        return "";
    }
}

function findBookIndex(code) {

}

function normalizeText(rawText) {

}

function inputIntegerInRange(message, min, max) {
    while (true) {
        let data = prompt(message);
        if (data === null) {
            console.log("Hủy thao tác");
            break;
        }

        if (data.trim() === "") {
            console.log("Chưa nhập từ khóa tìm kiếm");
            continue;
        }

        parseInData = Number(data);

        if (parseInData === NaN || parseInData < min || parseInData > max) {
            console.log(`Lỗi! Vui lòng chỉ nhập số từ ${min} tới ${max}`);
            continue;
        } else {
            return parseInData;
        }
    }

}

// case 1
function displayBooks(list) {
    let i = 0;
    if (list.length === 0) {
        console.log("Danh sách đầu sách trống.");
        return;
    }

    for (i = 0; i < list.length; i++) {
        console.log(`${i + 1}. ${list[i].bookCode} - ${list[i].title} - ${list[i].author}
        Năm xuất bản: ${list[i].publishYear} | Số lượng: ${list[i].quantity}`);
    }
    console.log(`Tổng: ${i + 1} đầu sách`);
    return;

}

// case 2
function addBook() {
    let inputCode = prompt("Nhập mã sách: ");
    if (inputCode === null) {
        console.log("Hủy thao tác");
        return;
    }
    let validatedCode = validateBookCode(inputCode);
    if (validatedCode !== null) {
        console.log(validatedCode);
        return;
    }
}

// case 3
function updateBookByCode() {
    let rawCode = prompt("Nhập mã sách bạn cần cập nhật: ");
    let isValid = false;
    let i = 0;

    if (rawCode === null) {
        console.log("Hủy thao tác");
        return;
    }

    let validatedCode = rawCode.trim().toUpperCase();

    if (validatedCode === "") {
        console.log("Chưa nhập từ khóa tìm kiếm");
        return;
    }

    for (i = 0; i < books.length; i++) {
        if (books[i].bookCode === validatedCode) {
            isValid = true;
            break;
        }

    }

    if (isValid === true) {
        let newPublishYear = inputIntegerInRange("Nhập năm xuất bản mới", 1990, 2026);
        let newQuantity = inputIntegerInRange("Nhập số lượng mới", 1, 50);
        books[i].publishYear = newPublishYear;
        books[i].quantity = newQuantity;
        console.log(`${books[i]}`);
        return;
    } else {
        console.log("Không tìm thấy cuốn sách");
        return;
    }
}

// case 4
function deleteBook() {
    let rawCode = prompt("Nhập mã sách bạn cần xóa: ");
    let isValid = false;
    let i = 0;

    if (rawCode === null) {
        console.log("Hủy thao tác");
        return;
    }
    let validatedCode = rawCode.trim().toUpperCase();

    for (i = 0; i < books.length; i++) {
        if (books[i].bookCode === validatedCode) {
            isValid = true;
            break;
        }

    }


    if (isValid === false) {
        console.log("Không tìm thấy mã sách");
        return;
    } else {
        let acpDelBook = prompt(`Bạn chắc chắn muốn xóa sách có mã ${validatedCode} không (Y/N): `)
        if (acpDelBook === null) {
            console.log("Hủy thao tác");
            return;
        } else if (acpDelBook === "Y") {
            books.splice(i, 1);
            console.log(("Xóa sách thành công!"));
            return;
        } else if (acpDelBook === "N") {
            console.log("Cuốn sách được giữ nguyên");
            return;
        }
    }
}

// case 5
function searchBookByAuthor() {
    let rawName = prompt("Nhập tên tác giả bạn cần tìm sách: ");
    let isValid = false;
    let result = [];
    let total = 0;

    if (rawName === null) {
        console.log("Hủy thao tác");
        return;
    }

    let validatedName = rawName.trim().toLowerCase();

    if (rawName.trim() === "") {
        console.log("Chưa nhập từ khóa tìm kiếm");
        return;
    }

    for (let i = 0; i < books.length; i++) {
        if (books[i].author.toLowerCase().includes(validatedName)) {
            result.push(books[i].bookCode);
            total += 1;
            isValid = true;
        }

    }

    if (isValid === false) {
        console.log("Không tìm cuốn sách nào cả");
        return;
    } else {
        console.log(`Từ khóa: ${rawName} - Số kết quả: ${total} - Mã đầu sách tìm được: ${result}`);

    }
}


do {
    choice = prompt(`${line}
        HỆ THỐNG QUẢN LÝ ĐAU SACH THU VIEN BÌNH MINH
${line}
1. Hiển thị danh sách đầu sách
2. Thêm đầu sách mới
3. Cập nhật thông tin đầu sách
4. Xóa đau sach
5. Tìm kiếm đầu sách theo tác giả
0. Thoát chương trình
${line}
Vui lòng nhập lựa chọn của bạn (0 - 5):`);

    if (choice === null) {
        choice = "0"
    }


    switch (choice) {
        case "1":
            displayBooks(books);
            break;


        case "2":
            addBook();
            break;


        case "3":
            updateBookByCode();
            break;


        case "4":
            deleteBook();
            break;


        case "5":
            searchBookByAuthor();
            break;


        case "0":
            console.log("Hẹn gặp lại bạn vào lần sau.");

            break;

        default:
            console.log("Lỗi! Vui lòng chọn đúng tính năng.");

            break;
    }

} while (choice !== "0");
