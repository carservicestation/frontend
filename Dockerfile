FROM httpd:alpine

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

COPY ./dist/frontend/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND
