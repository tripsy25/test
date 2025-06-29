//Palindrome Check
//isPalindrome()
const isPalindrome = require("./tdd");

//abc -> false
test("// abc -> false", ()=>{
    const result = isPalindrome("abc");
    expect(result).toBe(false);
});

//aba -> true
test("//aba -> true", ()=>{
    const result = isPalindrome("aba");
    expect(result).toBe(true);
});

//no input -> null
test("//no input -> null", ()=>{
    const result = isPalindrome();
    expect(result).toBe(null);
});

//null -> null
test("//null -> null", ()=>{
    const result = isPalindrome(null);
    expect(result).toBe(null);
});

//single letter -> is always true
test("//single letter -> true", ()=>{
    const result = isPalindrome("a");
    expect(result).toBe(true);
});

//123 -> false
test("//123-> false", ()=>{
    const result = isPalindrome(123);
    expect(result).toBe(false);
});

//121 -> true
test("//121-> true", ()=>{
    const result = isPalindrome(121);
    expect(result).toBe(true);
});

//Negative Number - 121 -> false
test("//- 121 -> true", ()=>{
    const result = isPalindrome(-121);
    expect(result).toBe(true);
});

//Boolean , {}, [], () => {} -> null
test("//Boolean , {}, [], () => {} -> null", ()=>{
    const result = isPalindrome({});
    expect(result).toBe(null);
});

//Aba -> true
test("//Aba -> true", ()=>{
    const result = isPalindrome("Aba");
    expect(result).toBe(true);
});

// "   aba   " -> true
test("//white spaces -> ignore white spaces", ()=>{
    const result = isPalindrome("   aba   ");
    expect(result).toBe(true);
});

//length > 10  -> null
test("//length > 10  -> null", ()=>{
    const result = isPalindrome("abcdefghijklmnopqrstuvwxyz");
    expect(result).toBe(null);
});

//multiple inputs -> ignore the rest
// test("//multiple inputs -> ignore the rest", ()=>{
//     const result = isPalindrome("1, 2, 3, 4");
//     expect(result).toBe(null);
// });