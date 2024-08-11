package handlers

import (
	"github.com/labstack/echo/v4"

	"github.com/vikrant0526/personal-website/src/helpers"
	"github.com/vikrant0526/personal-website/src/views"
)

func About(c echo.Context) error {
	return helpers.Render(c, views.About())
}
