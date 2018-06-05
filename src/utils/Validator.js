//策略方法，验证需要的函数
var strategies = {
    /* 不能为空 */
    required:function( value, flag, errorMsg ){
        if( flag && value === ''  ){
            return errorMsg;
        }
    },
    /* 最短长度 */
    minLength: function( value, length, errorMsg ){
        if( value.length < length ){
            return errorMsg;
        }
    },
    /* 最长长度 */
    maxLength: function ( value, length, errorMsg ) {
        if( value.length > length ){
            return errorMsg;
        }
    },
    /* 是否是手机号码 */
    isMobile: function( value, flag, errorMsg ){
        if( flag && !/^1[3|5|8][0-9]{9}$/.test( value )){
            return errorMsg;
        }
    },
    /* 正则 */
    pattern: function( value, regx, errorMsg ) {
        let reg = RegExp(regx)
        if( !reg.test( value )){
            return errorMsg;
        }
    }
}

function Validator(){
    this.cache = [];
}
/**
 * 
 * @param {需要验证的表单数据} value 
 * @param {该数据需要经过的验证方法集合} rules 
 * 
 */
Validator.prototype.add = function( value,rules ){
    var self = this;
    for( let rule of rules ){
        ( function( rule ){
            let strategyFun,//保存strategies的方法
                strategyValue;//保存strategies的方法的第二个参数
            let arg = []
            for( let x in rule ){
                if( strategies[ x ] ){
                    strategyFun = strategies[ x ];
                    strategyValue = rule[ x ];
                }
            }
            arg.push( value, strategyValue, rule[ 'errorMsg' ])
            self.cache.push( function() {
                //如果不用闭包，在该方法执行时候strategy会变成最后一个的数据
                return strategyFun.apply( value, arg )
            } )
        } )( rule )
    }
}
/* 表单开始验证 */
Validator.prototype.start = function(){
    //一次执行this.cache里面的验证函数
    for( var i = 0; i<this.cache.length; i++ ){
        var err = this.cache[i]()
        if( err ){
            return err;
        }
    }
}

export default Validator;
