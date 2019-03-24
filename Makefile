up: install-app install-api

install-app:
	@cd heroes-app; npm i;

install-api:
	@cd heroes-api; npm i

mongo:
	@cd docker; docker-compose up -d;