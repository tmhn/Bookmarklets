//
javascript: (function staffDiscountGenerator() {
    $(".discountedPrice").remove();
    var priceEls = document.getElementsByClassName("Price");
    var prices = [];
    for (var i = 0; i < priceEls.length; i++) {
        var price = priceEls[i].innerText;
        if (price.indexOf("-") > -1) {
            var res1 = price.split("£");
            res2 = res1[1].replace("-", "");
            res2 = res2 * (1 - 0.25);
            res3 = res1[2].replace("-", "");
            res3 = res3 * (1 - 0.25);
            var res4 = "£" + res2 + " - £" + res3;
            prices.push(res4);
            var res7 = prices[i];
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>" + res7 + "</span>");
        } else {
            var res5 = price.split("£");
            res6 = res5[1].replace(",", "");
            res6 = "£" + res6 * (1 - 0.25);
            prices.push(res6);
            var res8 = prices[i];
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>" + res8 + "</span>");
        }
    }
})();
//Bookmark inline
javascript: (function staffDiscountGenerator(){$(".discountedPrice").remove();var priceEls=document.getElementsByClassName("Price");var prices=[];for (var i=0; i<priceEls.length; i++){var price=priceEls[i].innerText;if(price.indexOf("-")>-1){var res1=price.split("£");res2=res1[1].replace("-", "");res2=res2*(1-0.25);res3=res1[2].replace("-", "");res3=res3*(1-0.25);var res4="£"+res2+" - £"+res3;prices.push(res4);var res7=prices[i];$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>"+res7+"</span>");}else{var res5=price.split("£");res6=res5[1].replace(",", "");res6="£"+res6*(1-0.25);prices.push(res6);var res8=prices[i];$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>"+res8+"</span>");}}})();
