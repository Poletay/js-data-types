#Makefile
install:
	npm install
start:
	npm run babel-node -- src/bin/gendiff.js __tests__/__fixtures__/before-complex.json __tests__/__fixtures__/after-complex.json -f json
publish:
	npm publish
lint:
	npm run eslint ./src
flow:
	npm run flow
build:
	npm run build
test:
	npm run test
watch-test:
	npm run test -- --watchAll