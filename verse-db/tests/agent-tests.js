'use strict';

const test = require('ava');

let config = {
    logging: () => {}
};
let db = null;

test.beforeEach(async () => {
    const setupDatabase = require('../');
    db = await setupDatabase(config);
});

test('Agent exists', t => {
    t.truthy(db.Agent, 'Agent should exist');
});