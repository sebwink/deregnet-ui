kong-setup:
	docker-compose -f docker/compose/deregnet.ui.base.yml build deregnet-ui-kong-setup

deregnet-ui:
	docker-compose -f docker/compose/deregnet.ui.base.yml build deregnet-ui

dev:
	docker-compose -f docker/compose/deregnet.ui.base.yml up 

dev-down:
	docker-compose -f docker/compose/deregnet.ui.base.yml down 
