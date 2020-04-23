const enhancer = require('./enhancer.js');
// test away!

describe("enhancer", () => {
    describe("repair(item)", () => {
        it("should take item object as argument and return a new item with durrability restored to 100", () => {
            const item = {
                name: "Sword",
                enhancement: 15,
                durability: 80
            }

            expect(enhancer.repair(item).durability).toBe(100);
        })
    })

    describe("success(item)", () => {
        it("should take item object as an argument and The item's enhancement increases by 1.", () => {
            const item = {
                name: "Sword",
                enhancement: 15,
                durability: 80
            }
            expect(enhancer.succeed(item).enhancement).toBe(16);
        })
        it("should take item object as an argument and If the item enhancement level is 20, the enhancement level is not changed.", () => {
            const item = {
                name: "Sword",
                enhancement: 20,
                durability: 80
            }
            
            expect(enhancer.succeed(item).enhancement).toBe(20);

        })
        it("should take item object as an argument and The durability of the item is not changed.", () => {
            const item = {
                name: "Sword",
                enhancement: 20,
                durability: 80
            }
            
            expect(enhancer.succeed(item).durability).toBe(item.durability);
        })
    })
    
    describe("fail(item)", () => {
        it("should take item object as an argument and If the item's enhancement is less than 15, the durability of the item is decreased by 5", () => {
            const item = {
                name: "Sword",
                enhancement: 14,
                durability: 80
            }
            expect(enhancer.fail(item).durability).toBe(75);
        })
        it("should take item object as an argument and If the item's enhancement is 15 or more, the durability of the item is decreased by 10.", () => {
            const item = {
                name: "Sword",
                enhancement: 15,
                durability: 80
            }
            expect(enhancer.fail(item).durability).toBe(70);
        })
        it("should take item object as an argument and If the item's enhancement level is greater than 16, the enhancement level decreases by 1.", () => {
            const item = {
                name: "Sword",
                enhancement: 16,
                durability: 80
            }
            expect(enhancer.fail(item).enhancement).toBe(15);
            expect(enhancer.fail(item).durability).toBe(70);
        })
    })
    
    describe("get(item)", () => {
        it("should take item object as an argument and if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name.", () => {
            const item = {
                name: "Sword",
                enhancement: 16,
                durability: 80
            }
            expect(enhancer.get(item).name).toBe("[+16] Sword");
        });
    })
})
