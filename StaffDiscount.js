//StaffDiscount.js
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
            res2a = ((res2 % 1 != 0) ? res2.toFixed(2) : res2);
            res3a = ((res3 % 1 != 0) ? res3.toFixed(2) : res3);
            res4 = res2a + " - £" + res3a;
            prices.push(res4);
            var res7test = prices[i];
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£" + res7test + "</span>");
        } else {
            var res5 = price.split("£");
            res6 = res5[1].replace(",", "");
            res6 = res6 * (1 - 0.25);
            prices.push(res6);
            var res8 = prices[i];
            res8test = ((res8 % 1 != 0) ? res8.toFixed(2) : res8);
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£" + res8test + "</span>");
        }
    }
    $(".dDPrice").remove();
    $(".dk_options").css("display", "inline;");
    var newTomsvar = $("li.InStock.a");
    var textArray = $("li.InStock > a");
    var oldArray = $("li.InStock").text().split("£");
    var newArray = oldArray.splice(1, oldArray.length - 1);
    var dropDownPrices = [];
    for (var j = 0; j < newArray.length; j++) {
        newArray[j].replace(/\s/g, '');
        var newArrayDecimal = newArray[j].indexOf(".") + 3;
        var newArrayPrice = newArray[j].substring(0, newArrayDecimal);
        var discountArrayInt = newArrayPrice * (1 - 0.25);
        var discountArrayPrice = ((discountArrayInt % 1 != 0) ? discountArrayInt.toFixed(2) : discountArrayInt);
        dropDownPrices.push(discountArrayPrice);
        $(textArray[j]).append(" <span class='dDPrice' style='color:red; display:inline'>£" + discountArrayPrice + "</span>");
    }
})();

//StaffDiscountLabel.js
javascript: (function() {
    $(".discountedPrice").remove();
    var priceEls = document.getElementsByClassName("Price");
    var prices = [];
    for (var i = 0; i < priceEls.length; i++) {
        var price = priceEls[i].innerText;
        if (price.indexOf("-") > -1) {
            var res1 = price.split("£");
            res2 = res1[1].replace("-", "");
            res2 = res2 * (1 - 0.1);
            res3 = res1[2].replace("-", "");
            res3 = res3 * (1 - 0.1);
            res2a = ((res2 % 1 != 0) ? res2.toFixed(2) : res2);
            res3a = ((res3 % 1 != 0) ? res3.toFixed(2) : res3);
            res4 = res2a + " - £" + res3a;
            prices.push(res4);
            var res7test = prices[i];
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£" + res7test + "</span>");
        } else {
            var res5 = price.split("£");
            res6 = res5[1].replace(",", "");
            res6 = res6 * (1 - 0.1);
            prices.push(res6);
            var res8 = prices[i];
            res8test = ((res8 % 1 != 0) ? res8.toFixed(2) : res8);
            $(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£" + res8test + "</span>");
        }
    }
})();


//StaffDiscount Bookmark inline
javascript: (function staffDiscountGenerator(){$(".discountedPrice").remove();var priceEls=document.getElementsByClassName("Price");var prices=[];for (var i=0; i<priceEls.length; i++){var price=priceEls[i].innerText;if(price.indexOf("-")>-1){var res1=price.split("£");res2=res1[1].replace("-", "");  res2=res2*(1-0.25); res3=res1[2].replace("-", "");  res3=res3*(1-0.25); res2a = ((res2 % 1 != 0) ? res2.toFixed(2) : res2);res3a = ((res3 % 1 != 0) ? res3.toFixed(2) : res3);res4 = res2a+" - £"+res3a;prices.push(res4);var res7test=prices[i];$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£"+res7test+"</span>");}else{var res5=price.split("£");res6=res5[1].replace(",", "");res6=res6*(1-0.25);prices.push(res6);var res8=prices[i];res8test = ((res8 % 1 != 0) ? res8.toFixed(2) : res8);$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>£"+res8test+"</span>");}}})();

//Minified inline
javascript: (function staffDiscountGenerator(){$(".discountedPrice").remove();for(var e=document.getElementsByClassName("Price"),s=[],r=0;r<e.length;r++){var a=e[r].innerText;if(a.indexOf("-")>-1){var t=a.split("£");res2=t[1].replace("-",""),res2=.75*res2,res3=t[2].replace("-",""),res3=.75*res3,res2a=res2%1!=0?res2.toFixed(2):res2,res3a=res3%1!=0?res3.toFixed(2):res3,res4=res2a+" - £"+res3a,s.push(res4);var n=s[r];$(e[r]).append(" <span class='discountedPrice' style='color:red;'>£"+n+"</span>")}else{var c=a.split("£");res6=c[1].replace(",",""),res6=.75*res6,s.push(res6);var i=s[r];res8test=i%1!=0?i.toFixed(2):i,$(e[r]).append(" <span class='discountedPrice' style='color:red;'>£"+res8test+"</span>");}}})();


//StaffDiscountLabel Bookmark inline
javascript: (function(){$(".discountedPrice").remove();var priceEls=document.getElementsByClassName("Price");var prices=[];for (var i=0; i<priceEls.length; i++){var price=priceEls[i].innerText;if(price.indexOf("-")>-1){var res1=price.split("%C2%A3");res2=res1[1].replace("-", "");  res2=res2*(1-0.1); res3=res1[2].replace("-", "");  res3=res3*(1-0.1); res2a = ((res2 % 1 != 0) ? res2.toFixed(2) : res2);res3a = ((res3 % 1 != 0) ? res3.toFixed(2) : res3);res4 = res2a+" - %C2%A3"+res3a;prices.push(res4);var res7test=prices[i];$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>%C2%A3"+res7test+"</span>");}else{var res5=price.split("%C2%A3");res6=res5[1].replace(",", "");res6=res6*(1-0.1);prices.push(res6);var res8=prices[i];res8test = ((res8 % 1 != 0) ? res8.toFixed(2) : res8);$(priceEls[i]).append(" <span class='discountedPrice' style='color:red;'>%C2%A3"+res8test+"</span>");}}})();
