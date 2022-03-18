package auth

import (
	"golang.org/x/net/context"
)

type Auth struct{}

func (a *Auth) VerifyKey(ctx context.Context, credentials *UserCredentials) (*AuthResponse, error) {

	// Run backend/internal/auth functions to verify key and create response

	return &AuthResponse{
		Success: true,
		User: &UserProfile{
			Username:  "Jaden",
			Avatar:    "https://www.google.com",
			DiscordId: "112233",
		},
	}, nil
}
