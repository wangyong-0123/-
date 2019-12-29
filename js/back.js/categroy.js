var categroy = {
    show:function(callback) {
        $.get('http://localhost:8000/admin/category_search',function(res) {
            callback(res);
        })
    },
    add:function(recipientName, recipientText) {
        $.post('http://localhost:8000/admin/category_add',{name:recipientName,slug:recipientText},function(res) {
            alert(res.msg);
            if(res.code == 200){
                location.href = 'article_category.html';
            }
        })
    },
    delete:function() {
        $.post('http://localhost:8000/admin/category_delete',{id:id},function(res) {
            console.log(res)
        })
    },
    updata:function(callback) {

    }


}