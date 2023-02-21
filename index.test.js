const { UNSAFE_enhanceManualRouteObjects } = require('react-router-dom');
const {sequelize} = require('./db')
const {Restaurant, Menu, Restaurant} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        const restaurant1 = await restaurant1.create({
            name: 'Addison',
            location: 'Manchester',
            cuisine: 'Chinese'
        })
        expect(restaurant1.name).toBe("Addison");
        expect(restaurant1.location).toBe("Manchester");
        expect(restaurant1.cuisine).toBe("Chinese");
    });

    test('can create a Menu', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can find Menus', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        expect('NO TEST').toEqual('EXPECTED DATA')
    });
})