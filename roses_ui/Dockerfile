# Use the latest 1.X.X version; v2.0.0 would presumably have breaking changes from 1.X
FROM nginx:1
COPY ./web /web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /web
