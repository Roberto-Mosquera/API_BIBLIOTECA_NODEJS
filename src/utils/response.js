export const success = (req,res,msg='',status=200,body="No se ha enviado data") => {
    res.status(status).send({
        status,
        error:false,
        msg,
        body
    });
}

export const error = (req,res,msg='Error Interno',status=400) => {
    res.status(status).send({
        status,
        error:true,
        msg,
    });
}