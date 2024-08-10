DIST := dist
.PHONY: init install format build clean run stop

# Commands
init: install 

install:
	npm install

format:
	npm run format

build:
	npm run build

clean:
	rm -rf $(DIST)

run:
	docker-compose up -d

stop:
	docker-compose down