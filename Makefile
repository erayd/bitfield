PRETTIER := node_modules/.bin/prettier
AJV := node_modules/.bin/ajv compile --use-defaults --coerce-types --code-lines

.PHONY: all
all: prettier src/schema.js


.PHONY: prettier
prettier:
	$(PRETTIER) --write **/*.js **/*.json

src/schema.js: src/schema-init.json src/schema-property.json
	$(AJV) -s src/schema-property.json -s src/schema-init.json -o src/schema.js

.PHONY: clean
clean:
	rm -rvf src/schema.js
