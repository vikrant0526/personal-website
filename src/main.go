package main

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"

	"github.com/vikrant0526/personal-website/src/handlers"
)

func main() {
	app := echo.New()
	var PORT string

	if err := godotenv.Load(); err != nil {
		PORT = "3000"
		// app.Logger.Fatal(err)
	} else {
		PORT = os.Getenv("PORT")
	}

	app.RouteNotFound("/*", handlers.Route404)

	app.GET("/", handlers.Index)
	app.GET("/about", handlers.About)
	app.GET("/contact", handlers.Contact)

	app.Static("/assets", "assets")

	app.Logger.Fatal(app.Start(PORT))
}
