package internal

import "os"

// Application
var (
	IS_DEV = len(os.Args[1:]) > 0 && os.Args[1:][0] == "dev"
)
