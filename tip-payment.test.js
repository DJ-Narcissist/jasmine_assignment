describe ("Servers test (with setup and tear-down)", function(){
    let billAmtInput;
    beforeEach(function(){
       billAmtInput =document.createElement('input');
        billAmtInput.value = 200;
        tipAmtInput = document.createElement('input');
        tipAmtInput.value = 25;
    });


    it ('should Add new payment allPayments, on submitAllPayments',function(){
        submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('25');
    expect(allPayments['payment1'].tipPercent).toEqual(12.5);
    });

    it ('should returned undefined if billAmt  or tipAmt has an empty input ', function(){
        billAmtInput = '';
        tipAmtInput = '25';
        expect(curPayment()).tobeUndefined();

        billAmtInput ='200';
        tipAmtInput= '25';

    });

    it ('it should return undefined if tipAmt has a negative input', function(){
        billAmtInput ='200';
        tipAmtInput = '-15';
        expect(curPayment()).tobeUndefined();

        billAmtInput ='200';
        tipAmtInput ='25';
        });

    it ('should update payment on #paymentTable if appended on appendPaymentTable', function(){
    let curPayment = createCurPayment();
    allPayments['payment1']= curPayment;
    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText.length(0)).toEqual('200');
    expect(curTdList[1].innerText.length).toEqual('25');
    expect(curTdList[2].innerText.length).toEqual('%12.5');
    expect(curTdList[3].innerText.length).toEqual('X')
    });

    it('should create new Payment on createCurPayment()', function(){
        let expectedPayment = {
        billAmt: '200',
        tipAmt:'25',
        tipPercent: '12.5',
     }
        expect(curPayment().toEqual(expectedPayment))
    });

    it ('should not create payment with an empty input on createCurPayment()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function(){
        billAmtInput.value ='';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTdbody.innerHTML = '';
     paymentId = 0;
     allPayments = {};
    });

});