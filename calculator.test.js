it ('should calculate the monthly rate correctly', function(){
    const values ={ 
        amount: 10000,
        years: 8,
        rate : 10,
    }
    expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

it ('should return a result with 2 decimal places', function(){
    const values = {
        amount:20000,
        years : 6,
        rate :15
    }
    expect(calculateMonthlyPayment(values)).toEqual('422.90');

});

it('should be able to work with high rates', function(){
    const values ={
        amount : 35000,
        years : 13,
        rate : 100,
    }
    expect(calculateMonthlyPayment(values)).toEqual('2916.68');
});