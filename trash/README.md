# Deprecation Log / Trash Documentation

This directory contains deprecated files moved out of active source code per project guidelines.

### Deprecated Items:
- `server.js.deprecated` (moved from `src/app/server.js`):
  - **Reason**: Redundant copy of root `server.js`. The `server.js` at the root of the project is the one executed by `npm start` (`node server.js`) for the Heroku dyno.
  - **Dependencies Removed**: Allowed eliminating `multer` from direct dependencies, resolving critical/high CVEs associated with unmaintained multer versions (#12, #13, #15, #16, #61, #62, #63, #64, #65, #66, #128, #129, #214, #215, #217, #219).
