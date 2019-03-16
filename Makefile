#Makefile
install:
	npm install
publish:
	npm publish
lint:
	npm run eslint ./src && npm run eslint ./__test__/
flow:
	npm run flow
build:
	npm run build
test:
	npm run test
watch-test:
	npm run test -- --watchAll