package grpc

import (
	"gotron-backend/grpc/auth"
	"log"
	"net"

	"google.golang.org/grpc"
)

func StartServer() {
	lis, err := net.Listen("tcp", ":9000")
	if err != nil {
		log.Fatalf("[BACKEND] Failed to listen to tcp port :9000: %v", err)
	}

	grpcServer := grpc.NewServer()

	// Register services
	auth.RegisterAuthServiceServer(grpcServer, &auth.Auth{})

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("[BACKEND]: Failed to serve grpc server %s", err)
	}
}
