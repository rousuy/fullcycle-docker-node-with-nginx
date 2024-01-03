
DC = docker-compose

EXEC = $(DC) exec

RUN = $(DC) run --rm

up:
	@echo "Starting server..."
	$(DC) up -d

down:
	$(DC) down --remove-orphans


build:
	@echo "Copying environments files"
	cp contrib/node-env-sample ./node/.env
	
	$(DC) up -d --build