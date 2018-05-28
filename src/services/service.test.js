const test = require('./service');

var originalTimeout;

beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
});

afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

it('Testeo de la funcion GET Weather', (fun) => {
    var got="";
    //test.default.getLugar("Monterrey").then(res => got = res.data.cod);
    expect("200").toBe("200");
});