# verse-clone
Node.js Simple IoT Platform

## DB Module

### Usage
```js
const setupDatabase = require('verse-db');

setupDatabase(config).then(db => {
    const { Agent, Metric } = db
}).catch( err => console.log(err))
```
