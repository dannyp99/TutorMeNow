version=0.1.0

package:
	docker build -t roses_jam_store_ui .

publish:
	docker tag roses_jam_store_ui milaniliev/roses_jam_store_ui:$(version)
	docker push milaniliev/roses_jam_store_ui:$(version)
