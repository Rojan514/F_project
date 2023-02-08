//calculatorHelper is a name and tala ko calculatorHelper.sum bhanya obj and variable ho 

const httpStatus = require("http-status");

((calculationHelper) => {
    calculationHelper.sum = function sum(a, b) {
        return a + b;
    }

    calculationHelper.login = async (request) => {

        const invalid = await calculationHelper.loginValidation(request);
        let userName = request.name;
        if (!invalid) {
            return {
                status: httpStatus.BAD_GATEWAY,
                message: "Username is required",
            }
        }
        else if (userName == "ram"){
            return "success";
        }
        else{
            return "unsuccess";
        }
        }



        calculationHelper.loginValidation = function (request) {
            if (request){
                return true;
            }
            return false;

        }


    }
)(module.exports)

