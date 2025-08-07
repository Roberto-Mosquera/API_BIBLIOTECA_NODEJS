export const success = (req,res,msg='',status=200,body="No se ha enviado data") => {
    res.status(status).json({
        status,
        error:false,
        msg,
        body
    });
}

export const successVoid = (req,res,msg='',status=200) => {
    res.status(status).json({
        status,
        error:false,
        msg
    });
}


export const error = (req,res,msg='Error Interno',status=400) => {
    res.status(status).json({
        status,
        error:true,
        msg,
    });
}