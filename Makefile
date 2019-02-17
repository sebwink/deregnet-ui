kong-setup:
	docker-compose -f docker/compose/deregnet.ui.base.yml build deregnet-ui-kong-setup

deregnet-ui:
	docker-compose -f docker/compose/deregnet.ui.base.yml build deregnet-ui

up:
	docker-compose -f docker/compose/deregnet.ui.base.yml up 

down:
	docker-compose -f docker/compose/deregnet.ui.base.yml down 
