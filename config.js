module.exports = {
    name: 'NexusCoders-MD',
    owner: process.env.OWNER_NUMBER,
    timezone: 'Africa/lagos',
    autoReconnect: true,
    autoReconnectInterval: 5000,
    logLevel: 'info',
    mongodb: {
        uri: process.env.MONGODB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
