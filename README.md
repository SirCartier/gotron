PATH="${PATH}:${HOME}/go/bin" protoc -I protos/ protos/*.proto --go_out=plugins=grpc:backend/grpc