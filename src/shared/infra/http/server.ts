import app from "./app";
import env from '../../../config/index'

let host = env.HOST || 'localhost'
let port = env.PORT || '8888'

app.server.listen(env.PORT, () => {
    console.info(`⚡️⚡️⚡️[ABSOLUT-PSYCO_API]: Server is running at http://${host}:${port}`)
})
