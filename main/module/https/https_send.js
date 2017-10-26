const
    https = require('https')
    ,http_confirm = require("./../http/http_confirm")
    ,unload_data_print = require("./../print/unload_data_print")
;

// const loggerFun = require("./../../module/log/log4js");
// const logger = loggerFun("data/common/json.log")();
function https_end(opts) {




    //伪装浏览器





    if(true){ //URL

        https
            .get(opts.url, (res) => {
                http_confirm(opts,res);// 此处应当判断status
            })
            .on('error', (err) => {
                err = JSON.stringify(err);
                unload_data_print(opts,err)
                logger.error(err,opts);
            });

    }else{ //host

        https
            .get(opts, (res) => {
                http_confirm(opts,res);// 此处应当判断status
            })
            .on('error', (err) => {
                unload_data_print(opts,err)
                logger.error(err,opts);
            });
    }



}
module.exports = https_end;

