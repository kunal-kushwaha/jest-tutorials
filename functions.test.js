const functions = require('./functions')

// If you want to run something before/after your tests
// you can use lifecycle methods

// will run before and after each test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// will run after all the tests have run
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

// you can also target certain tests if you want to run something 
// just for certain ones, hence here it will run the nameCheck
// only for the two tests in describe
const nameCheck = () => console.log('Checking Name....');
describe('Checking Names', () => {
    beforeEach(() => nameCheck());  
    test('User is Kunal', () => {
        const user = 'Kunal'
        expect(user).toBe('Kunal')
    })
    test('User is Rahul', () => {
        const user = 'Rahul'
        expect(user).toBe('Rahul')
    })
})

test('Adds 2 + 2 to equal 4', () => {
    // in expect add the function you want to test
    // doesnt have to be a function, can pass anything
    // toBe is a matcher
    expect(functions.add(2,2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
    expect(functions.checkValue(10)).not.toBeFalsy();
    expect(functions.checkValue(10)).toBeTruthy();
})

test('User should be kunal kushwaha object', () => {
    // expect(functions.createUser()).toBe({firstName: 'Kunal', lastName: 'Kushwaha'}); // this will fail
    expect(functions.createUser()).toEqual({firstName: 'Kunal', lastName: 'Kushwaha'});
})

// less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

// check regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
    expect('teamI').toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['kunal', 'admin', 'rahul']
    expect(usernames).toContain('admin')
})

// working with async data

// promise
// test('User fetched name should be Leanne Graham', () => {
//     // add this when using async data
//     // this will verify that certain number of assertions are called
//     // to make sure that the assertions in callback actually get called
//     expect.assertions(1);

//     // return the promise else test will complete before the fetch completes
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// })

// async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});