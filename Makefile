install:
	@npm ci

test:
	@npx jest
lint:
	@npx eslint .
cover:
	@npx jest --coverage
index:
	@node bin/index.js