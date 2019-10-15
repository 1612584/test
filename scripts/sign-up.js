$(document).ready(() => {
    $("#formSignUp").submit((e) => {
        $("span").html("");

        e.preventDefault();
        let hoten = $("#hoten").val();
        let username = $("#username").val();
        let sdt = $("#sdt").val();
        let email = $("#email").val();
        let ngsinh = $('#ngaysinh').val();
        console.log(`form submit email (${email} hoten ${hoten} username ${username} sdt ${sdt} ngay sinh ${ngsinh})`);

        if (hoten.length < 1) {
            $('#hotenspan').html("bạn chưa nhập họ tên");
        } else {
            let regEx = /^[A-Z]{1}[a-zA-Z-]*$/;
            let tenArray = hoten.split(/\s+/);
            for (let i = 0; i < tenArray.length; i++) {
                console.log(`tenArray[${i}] |${tenArray[i]}| length = ${tenArray[i].length}`);


                if (tenArray[i].length > 0) {
                    console.log(`kiem tra ten ${tenArray[i]}`);
                    if (!regEx.test(tenArray[i])) {
                        $('#hotenspan').html("bạn chưa viết hoa kí tự đầu của tên");
                        break;
                    }

                }
            }

        }
        if (username.length < 1) {
            $('#usernamespan').html('bạn chưa nhập username');
        } else {
            let regEx = /^[_A-Za-z]{1}[_A-Za-z0-9]{0,52}$/;
            let validUsername = regEx.test(username);
            if (!validUsername) {
                console.log('username invalid');
                if ((/^[0-9]{1}/.test(username[0]))) {
                    $("#usernamespan").html("username không được bắt đầu bằng ký tự số ");

                } else {
                    $("#usernamespan").html("username chỉ được chứa ký tự chữ cái, chữ số và ký tự _");
                }
                //chi ro ra username chi bao gom cac ki tu,so,_
                //neu username bat dau bang ki tu so thi thi xuat ra
            }
        }
        if (email.length < 1) {
            $('#emailspan').html("bạn chưa nhập email");
        } else {
            let regEx = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,6}){1,3}$/;
            let validEmail = regEx.test(email);
            if (!validEmail) {

                $('#emailspan').html('Email không hợp lệ');
            }
        }
        if (sdt.length < 1) {
            $('#sdtspan').html("bạn chưa nhập số điện thoại");
        } else {
            let regEx = /^0[0-9]{9}$/;
            if (!regEx.test(sdt)) {
                $('#sdtspan').html("số điện thoại chưa hợp lệ");
            }
        }

        if (String(ngsinh).length < 1) {
            $('#ngaysinhspan').html("bạn chưa nhập ngày sinh");
        } else if (Date.parse(ngsinh) == undefined || Date.parse(ngsinh) == null) {
            $('#ngaysinhspan').html("ngày bạn nhập không hợp lệ");
        } else {
            let current = new Date().getFullYear();
            let yourYear = new Date(ngsinh).getFullYear();
            const age = current - yourYear;
            console.log(`age ${age}`);
            if (!((age) >= 15 && age <= 55)) {
                $('#ngaysinhspan').html("tuổi của bạn phải trên 15 và nhỏ hơn 55");
            }
        }

    });
});