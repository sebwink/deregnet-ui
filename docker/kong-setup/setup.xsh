#!/usr/bin/env xonsh

import json 

def loadsJson(f):

    def _f(*args, **kwargs):
        ret = f(*args, **kwargs)
        return json.loads(ret)

    return _f

@loadsJson
def registerDeregnetUiService():
    return $(
        curl --silent -X POST \
             --url http://kong:8001/services \
             --data 'name=deregnet-ui' \
             --data 'url=http://deregnet-ui:8080/'
    )


@loadsJson 
def registerDeregnetUiServiceRoute():
    return $(
        curl --silent -X POST \
             --url http://kong:8001/services/deregnet-ui/routes \
             --data 'methods[]=GET' \
             --data 'methods[]=POST' \
             --data 'methods[]=DELETE' \
             --data 'methods[]=PUT'
    )

if __name__ == '__main__':
    # DeRegNet UI
    registerDeregnetUiService()
    registerDeregnetUiServiceRoute()
