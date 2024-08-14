run: build
	@./bin/app

build: 
	@templ generate
	@go build -o bin/app src/main.go

templ:
	@templ generate --watch --proxy=http://localhost:3000 --open-browser=false

build-assets:
	@yarn build
