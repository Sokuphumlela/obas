package domain

type Login struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type Register struct {
	Email string `json:"email"`
}

type LoginToken struct {
	Email string
	Token string `json:"token"`
}

type ForgotPassword struct {
	Email string `json:"email"`
}
