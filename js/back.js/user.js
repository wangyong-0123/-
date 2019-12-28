var user = {
    logOut: function () {
        $.post('http://localhost:8000/admin/logout',
            function (res) {
                console.log(res)
                alert(res.msg);
                if (res.code === 200) {
                    location.href = 'login.html';
                }
            },
        )
    },
    userMessage:function() {
        $.get('http://localhost:8000/admin/getuser',function(res) {
            $('.user_info').find('img').attr('src',res.data.user_pic).next('span').html('欢迎&nbsp;&nbsp;'+res.data.nickname);
            $('.user_center_link').find('img').attr('src',res.data.user_pic);
        })
    },
    login:function(username,password){
        $.post(
            'http://localhost:8000/admin/login',
            {user_name:username,password:password},
            function(res) {
                alert(res.msg);
                if(res.code===200) {
                    location.href = 'index.html';
                }
            },
            'json'
        )
    }

}