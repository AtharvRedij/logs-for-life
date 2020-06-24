# logs for life

logs for life is a simple javascript logging library.

### Installation

`npm i logs-for-life`

### Usage

```javascript
import lfl from "logs-for-life";

lfl.log("Executed this function");
lfl.success("Account created successfully");
lfl.info("Server started");
lfl.warn("Memory usage is over 90%");
lfl.error("Network disconnected");

lfl.group("Things to learn", "MongoDB", "Express", "React", "NodeJS");
```
