var categroy = {
    show:function(callback) {
        $.get('http://localhost:8000/admin/category_search',function(res) {
            console .log(res)
            callback(res);
        })
    },
    add:function(callback) {
        $.post('http://localhost:8000/admin/category_add',)
    },
    delete:function(callback) {
        $.post('http://localhost:8000/admin/category_delete',)
    },
    updata:function(callback) {

    }


}