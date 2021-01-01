PRETTIER := node_modules/.bin/prettier

.PHONY: prettier
prettier:
	$(PRETTIER) --write **/*.js **/*.json
