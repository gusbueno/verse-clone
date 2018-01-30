'use strict';

const setupDatabase = require('./lib/db');
const setupAgentModel = require('./models/agent');
const setupMetricModel = require('./models/metric');


module.exports = async function(config) {
    const sequelize = setupDatabase(config);
    const AgentModel = setupDatabase(config);
    const MetricModel = setupDatabase(config);

    AgentModel.hasMany(MetricModel);
    MetricModel.belongsTo(AgenModel);

    await sequelize.authenticate(); // check if db is configured correctly

    const Agent = {};
    const Metric = {};

    return {
        Agent,
        Metric
    };
}
