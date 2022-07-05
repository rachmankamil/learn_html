import { checkPrima, maxSeq, PrimaSquare, checkPrimaX } from "./taskSenin";

describe("Check Prime Number", ()=>{
    it("will return true if number is prime", () => {
        expect(checkPrima(3)).toBe(true);
    })
    it("will return false if number is not prime", () => {
        expect(checkPrima(10)).toBe(false);
    })
    it("will return false if number is less than 1", () => {
        expect(checkPrima(1)).toBe(false);
    })
    it("will not crash with large number", () => {
        expect(checkPrima(1000000000)).toBe(false);
    })
})

describe("max sequence", ()=>{
    it("will return 6", () => {
        expect(maxSeq([-2,1,-3,4,-1, 2, 1, -5, 4])).toBe(6);
    })
})

describe("Square prima", ()=>{
    it("sum all prime number", () => {
        const consoleSpy = jest.spyOn(console,'log')

        expect(PrimaSquare(2,3,13)).toBe(156);
        
        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining("17 19")
        )
    })
})

describe("Test number x of prime", ()=>{
    it("check number x", () => {
        expect(checkPrimaX(1)).toBe(2);
    })
})