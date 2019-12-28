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
    userMessage:function(callback) {
        $.get('http://localhost:8000/admin/getuser',function(res) {
          callback(res);
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