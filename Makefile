all: init prepare grunt
init:
	npm install
	bower install
prepare:
	mkdir -p build/js
	mkdir -p build/css
	cp bower_components/jquery/jquery.min.js build/js/jquery.min.js
	cp -r src/img/ build/img/
	cp src/fonts/* build/css/
	cp src/resource/cn/*.txt build/
	cp src/resource/en/*.txt build/en/
	cp src/CNAME build/CNAME
grunt:
	grunt
	mv build/cn/*.html build
