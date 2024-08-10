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

	app.RouteNotFound("/*", handlers.Route404)
	app.GET("/", handlers.Index)
	app.Static("/assets", "assets")
	app.Logger.Fatal(app.Start(PORT))
}
