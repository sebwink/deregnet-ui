API_COMPOSE=api/docker/compose
UI_COMPOSE=ui/docker/compose
COMPOSE=docker/compose 
DOCKER_COMPOSE=$(DOCKER_COMPOSE) --project-directory $(COMPOSE)

API_BASE=-f $(API_COMPOSE)/base.yml
API_DEV=$(API_BASE) -f $(API_COMPOSE)/dev.yml -f $(COMPOSE)/api.dev-volumes.yml
API_KONG_SETUP=-f $(API_COMPOSE)/kong-setup.yml
API_KONG_TEARDOWN=-f $(API_COMPOSE)/kong-teardown.yml

UI_BASE=-f $(UI_COMPOSE)/base.yml
UI_DEV=$(UI_BASE) -f $(UI_COMPOSE)/dev.yml -f $(COMPOSE)/ui.dev-volumes.yml
UI_KONG_SETUP=-f $(UI_COMPOSE)/kong-setup.yml
UI_KONG_TEARDOWN=-f $(UI_COMPOSE)/kong-teardown.yml

BUILD=$(UI_DEV) $(UI_KONG_SETUP) $(UI_KONG_TEARDOWN) $(API_DEV) $(API_KONG_SETUP) $(API_KONG_TEARDOWN)

_IMAGES=deregnet-ui \
		deregnet-ui-kong-setup \
		deregnet-ui-kong-teardown \
		deregnet-ui-api \
		deregnet-ui-api-kong-setup \
		deregnet-ui-api-kong-teardown

IMAGES=$(patsubst %, sebwink/%, $(_IMAGES))

all: $(_IMAGES)

%:
	$(DOCKER_COMPOSE) $(BUILD) build $@

up:
	$(DOCKER_COMPOSE) $(UI_DEV) $(API_DEV) up 

down:
	$(DOCKER_COMPOSE) $(UI_DEV) $(API_DEV) rm --stop --force

kong-setup:
	$(DOCKER_COMPOSE) $(API_KONG_SETUP) $(UI_KONG_SETUP) up
	$(DOCKER_COMPOSE) $(API_KONG_SETUP) $(UI_KONG_SETUP) rm --stop --force

kong-teardown:
	$(DOCKER_COMPOSE) $(API_KONG_TEARDOWN) $(UI_KONG_TEARDOWN) up
	$(DOCKER_COMPOSE) $(API_KONG_TEARDOWN) $(UI_KONG_TEARDOWN) rm --stop --force 

kong-up: kong-setup up 

kong-down: kong-teardown down

rmi:
	docker rmi $(IMAGES)
