describe ("Servers test (with setup and tear-down)", function(){
    let serverNameInput;
    beforeEach(function(){
        serverNameInput = document.getElementById('serverNameInput');
    it ("should set server name to 'Alice'", function(){
        serverNameinput.value ='Alice';
    });
});



    it ('should add a new server to allServers on submitServerInfo()',function(){
        submitServerInfo();

        expect(Object.keys(allServers).length).toequal(1);
        expect(allServers['server + serverId'].serverName).toequal('Alice');
    });

    it ('should never add new server on submitServerInfo() with no input ', function(){
        serverNameInput.value ='';
        submitServerInfo();

        expect(Object.keys(allServers).length).toequal(0);
    });

    it ('should update #serverTable on updateServerTable()', function(){
        updateServerTable()
        expect(currentTdList.length).toequal(0);
        expect(currentTdList[0].innerText).toequal=('Alice');
        expect(currentTdList[1].innerText).toequal =('$ 0.00');
        expect(currentTdList[2].innerText).toequal = ('X');
    });

    afterEach(function(){
        //teardown logic
        serverId = 0;
        serverTbody.innerHTML = '';
        allServers = {};
    });
});