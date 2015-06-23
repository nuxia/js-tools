jQuery.fn.exist = function () {
    return $(this).length > 0;
};

jQuery.exist = function (param) {
    return ((param != null) && (param.length != 0)) ? true : false;
};
