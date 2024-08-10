package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"github.com/vikrant0526/personal-website/src/helpers"
	"github.com/vikrant0526/personal-website/src/views"
)

func Route404(c echo.Context) error {
	c.Response().Status = http.StatusNotFound
	return helpers.Render(c, views.Route404())
}
