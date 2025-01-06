function compareTime(datestring1,datestring2){
    const dateTime1=new Date(datestring1);
    const dateTime2=new Date(datestring2);
    return dateTime1.getTime() > dateTime2.getTime();
}
module.exports={
    compareTime
}