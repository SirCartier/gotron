const { ipcRenderer, contextBridge } = require("electron");
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const path = require("path")

const AuthProto = protoLoader.loadSync(
    path.join(__dirname, "../../protos/auth.proto")
)

const AuthPackage = grpc.loadPackageDefinition(AuthProto)

const AuthService = new AuthPackage.auth.AuthService('localhost:9000', grpc.credentials.createInsecure())

contextBridge.exposeInMainWorld("api", {

   auth: {
       verifyKey: (UserCredentials) => new Promise((res, rej) => {
        AuthService.VerifyKey(UserCredentials, (err, response) => err ? rej(err): res(response))
    })
   }

})