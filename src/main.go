package main

import (
	"net/http"
	"os"

	"github.com/a-h/templ"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"

	"vikrrantshah/personal-website/src/views"
)

func main() {
	app := echo.New()
	var PORT string

	if err := godotenv.Load(); err != nil {
		PORT = ":3000"
	} else {
		PORT = os.Getenv("PORT")
	}

	app.RouteNotFound("/*", func(c echo.Context) error {
		c.Response().Status = http.StatusNotFound
		return views.Route404().Render(c.Request().Context(), c.Response().Writer)
	})

	BuildGetRoute(app, "/", views.Index())
	BuildGetRoute(app, "/about", views.About())
	BuildGetRoute(app, "/contact", views.Contact())

	app.Static("/assets", "assets")

	app.Logger.Fatal(app.Start(PORT))
}

func BuildGetRoute(e *echo.Echo, path string, t templ.Component) {
	e.GET(path, func(c echo.Context) error {
		return t.Render(c.Request().Context(), c.Response().Writer)
	})
}
