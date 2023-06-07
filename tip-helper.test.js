describe ("Utlities test (with setup and tear down)",function(){
    beforeEach(function(){
        billAmtInput.value = '200';
        tipAmtInput.value = '25';
        submitPaymentInfo();
    });

    it ('should sum total tip amount all payments on sumPaymentTotal',function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(50);

        billAmtInput.value = '400';
        tipAmtInput.value = '50';

        submitPaymentInfo();
        expect(submitPaymentInfo('tipAmt')).toEqual(75);
        });

    it ('should sum total bill amount all payments on sumPaymentTotal', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = '300';
        tipAmtInput.value = '50';

        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it ('should sum total tip percent all payments on sumPaymentTotal', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(12.5);

        billAmtInput.value = '200';
        tipAmtInput.value = '25';
        
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(12.5);
    });

    it ('should sum tip percent of a single tip on calculateTipPayment()', function () {
        expect(calculateTipPercent('tipPercent(200,25)')).toEqual(12.5);
        expect(calculateTipPercent('tipPercent(200,30)')).toEqual(15);
        expect(calculateTipPercent('tipPercent(200,50)')).toEqual(25);
      });

    it ('should generate new td from value and append to tr on appendDeleteBtn(tr,type)', function(){
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHtml).toEqual('X');
    });

    it ('should generate delete td from value and append to tr on appendDeleteBtn(tr,type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn('newTr');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHtml).toEqual('X');
    });
    
    afterEach( function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});