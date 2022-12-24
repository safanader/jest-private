const myTesting = require("./sum")

test("calculate the tax",()=>{
    expect(myTesting(50,50)).toBe(16);
}) 