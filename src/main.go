package main

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"

	"github.com/vikrant0526/personal-website/src/handlers"
)

func main() {
	app := echo.New()
	if err := godotenv.Load(); err != nil {
		app.Logger.Fatal(err)
	}

	PORT := os.Getenv("PORT")

	app.GET("/", handlers.Index)
	app.Logger.Fatal(app.Start(PORT))
}
