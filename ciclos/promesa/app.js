const promise = new promise((
    resolver,
    reject) => {
    setTimeout(() => {
        let operationsuccessful = true;
        if (operationsuccessful) {
            resolver("operacion exitosa");
        } else {
            reject("fallo la operacion ");
        }
    }, 2000)
});



promise
    .then((successmessage) => {

        console.log(successmessage);

    })
    .catch((errorMesasage) => {
        console.log(errorMesasage);
    });