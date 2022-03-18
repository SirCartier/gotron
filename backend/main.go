package main

import (
	"fmt"
	"gotron-backend/grpc"
)

func main() {
	fmt.Println("[BACKEND] Starting Gotron backend")

	grpc.StartServer()
}
